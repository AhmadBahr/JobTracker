import { Component, OnInit, signal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApplicationService } from '../../services/application.service';
import { JobApplication } from '../../models/application.model';
import { ApplicationFormComponent } from '../../components/application-form/application-form.component';

@Component({
  selector: 'app-application-form-page',
  standalone: true,
  imports: [ApplicationFormComponent],
  templateUrl: './application-form-page.component.html',
  styleUrl: './application-form-page.component.scss',
})
export class ApplicationFormPageComponent implements OnInit {
  application = signal<JobApplication | null>(null);
  loading = signal(true);
  isEdit = signal(false);

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private applicationService: ApplicationService
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id && id !== 'new') {
      this.isEdit.set(true);
      this.applicationService.getById(id).subscribe({
        next: (app) => {
          this.application.set(app ?? null);
          this.loading.set(false);
        },
        error: () => this.loading.set(false),
      });
    } else {
      this.loading.set(false);
    }
  }

  onSaved(app: JobApplication) {
    if (this.isEdit()) {
      this.applicationService.update(app.id, app).subscribe({
        next: () => this.router.navigate(['/applications', app.id]),
        error: () => {},
      });
    } else {
      this.applicationService.create(app).subscribe({
        next: (created) => this.router.navigate(['/applications', created.id]),
        error: () => {},
      });
    }
  }

  onCancelled() {
    const app = this.application();
    if (app) {
      this.router.navigate(['/applications', app.id]);
    } else {
      this.router.navigate(['/applications']);
    }
  }
}
