import { Component, OnInit, signal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApplicationService } from '../../services/application.service';
import { JobApplication } from '../../models/application.model';
import { ApplicationDetailComponent } from '../../components/application-detail/application-detail.component';

@Component({
  selector: 'app-application-detail-page',
  standalone: true,
  imports: [ApplicationDetailComponent],
  templateUrl: './application-detail-page.component.html',
  styleUrl: './application-detail-page.component.scss',
})
export class ApplicationDetailPageComponent implements OnInit {
  application = signal<JobApplication | null>(null);
  loading = signal(true);

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private applicationService: ApplicationService
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (!id) {
      this.router.navigate(['/applications']);
      return;
    }
    this.applicationService.getById(id).subscribe({
      next: (app) => {
        this.application.set(app ?? null);
        this.loading.set(false);
        if (!app) {
          this.router.navigate(['/applications']);
        }
      },
      error: () => {
        this.loading.set(false);
        this.router.navigate(['/applications']);
      },
    });
  }

  onDeleteRequested(id: string) {
    if (!confirm('Are you sure you want to delete this application?')) return;
    this.applicationService.delete(id).subscribe({
      next: () => this.router.navigate(['/applications']),
    });
  }
}
