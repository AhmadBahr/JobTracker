import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { JobApplication } from '../../models/application.model';

@Component({
  selector: 'app-application-list',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './application-list.component.html',
  styleUrl: './application-list.component.scss',
})
export class ApplicationListComponent {
  applications = input.required<JobApplication[]>();
  showEmptyState = input(false);
  loading = input(false);
}
