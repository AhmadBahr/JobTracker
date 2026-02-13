import { Component, OnInit, signal, computed } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ApplicationService } from '../../services/application.service';
import { JobApplication, ApplicationStatus } from '../../models/application.model';
import { ApplicationListComponent } from '../../components/application-list/application-list.component';

@Component({
  selector: 'app-application-list-page',
  standalone: true,
  imports: [RouterLink, ApplicationListComponent],
  templateUrl: './application-list-page.component.html',
  styleUrl: './application-list-page.component.scss',
})
export class ApplicationListPageComponent implements OnInit {
  applications = signal<JobApplication[]>([]);
  loading = signal(true);
  statusFilter = signal<ApplicationStatus | 'All'>('All');
  searchQuery = signal('');

  filteredApplications = computed(() => {
    let apps = this.applications();
    const status = this.statusFilter();
    const query = this.searchQuery().toLowerCase().trim();
    if (status !== 'All') {
      apps = apps.filter((a) => a.status === status);
    }
    if (query) {
      apps = apps.filter((a) => a.company.toLowerCase().includes(query) || a.position.toLowerCase().includes(query));
    }
    return apps;
  });

  readonly statuses: (ApplicationStatus | 'All')[] = ['All', 'Applied', 'Interview', 'Offered', 'Rejected'];

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

  setStatusFilter(status: ApplicationStatus | 'All') {
    this.statusFilter.set(status);
  }

  onSearchChange(value: string) {
    this.searchQuery.set(value);
  }
}
