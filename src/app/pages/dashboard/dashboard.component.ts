import { Component, OnInit, signal, computed } from '@angular/core';
import { ApplicationService } from '../../services/application.service';
import { JobApplication, ApplicationStatus } from '../../models/application.model';
import { DashboardStatsComponent } from '../../components/dashboard-stats/dashboard-stats.component';
import { RouterLink } from '@angular/router';
import { ApplicationListComponent } from '../../components/application-list/application-list.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [DashboardStatsComponent, ApplicationListComponent, RouterLink],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent implements OnInit {
  applications = signal<JobApplication[]>([]);
  loading = signal(true);

  counts = computed<Record<ApplicationStatus, number>>(() => {
    const apps = this.applications();
    const c: Record<ApplicationStatus, number> = { Applied: 0, Interview: 0, Offered: 0, Rejected: 0 };
    for (const a of apps) {
      c[a.status]++;
    }
    return c;
  });

  recentApplications = computed(() => this.applications().slice(0, 5));

  constructor(private applicationService: ApplicationService) {}

  ngOnInit() {
    this.applicationService.getAll().subscribe({
      next: (apps) => {
        this.applications.set(apps);
        this.loading.set(false);
      },
      error: () => this.loading.set(false),
    });
  }
}
