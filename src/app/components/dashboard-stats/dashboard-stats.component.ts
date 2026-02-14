import { Component, input } from '@angular/core';
import { ApplicationStatus } from '../../models/application.model';

interface StatusCount {
  status: ApplicationStatus;
  count: number;
  label: string;
  color: string;
}

@Component({
  selector: 'app-dashboard-stats',
  standalone: true,
  imports: [],
  templateUrl: './dashboard-stats.component.html',
  styleUrl: './dashboard-stats.component.scss',
})
export class DashboardStatsComponent {
  counts = input.required<Record<ApplicationStatus, number>>();

  get stats(): StatusCount[] {
    const c = this.counts();
    return [
      { status: 'Applied', count: c['Applied'] ?? 0, label: 'Applied', color: 'applied' },
      { status: 'Interview', count: c['Interview'] ?? 0, label: 'Interview', color: 'interview' },
      { status: 'Offered', count: c['Offered'] ?? 0, label: 'Offered', color: 'offered' },
      { status: 'Rejected', count: c['Rejected'] ?? 0, label: 'Rejected', color: 'rejected' },
    ];
  }
}
