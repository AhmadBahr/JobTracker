import { Component, input, output } from '@angular/core';
import { RouterLink } from '@angular/router';
import { JobApplication } from '../../models/application.model';

@Component({
  selector: 'app-application-detail',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './application-detail.component.html',
  styleUrl: './application-detail.component.scss',
})
export class ApplicationDetailComponent {
  application = input.required<JobApplication>();
  loading = input(false);
  deleteRequested = output<string>();
}
