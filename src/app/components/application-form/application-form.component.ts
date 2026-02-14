import { Component, input, output, effect } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { JobApplication, ApplicationStatus } from '../../models/application.model';

@Component({
  selector: 'app-application-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './application-form.component.html',
  styleUrl: './application-form.component.scss',
})
export class ApplicationFormComponent {
  application = input<JobApplication | null>(null);
  saved = output<JobApplication>();
  cancelled = output<void>();

  form!: FormGroup;
  readonly statuses: ApplicationStatus[] = ['Applied', 'Interview', 'Offered', 'Rejected'];

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      company: ['', Validators.required],
      position: ['', Validators.required],
      status: ['Applied', Validators.required],
      appliedDate: [new Date().toISOString().slice(0, 10), Validators.required],
      notes: [''],
      jobUrl: [''],
      salary: [''],
    });
    effect(() => {
      const app = this.application();
      if (app) {
        this.form.patchValue({
          company: app.company,
          position: app.position,
          status: app.status,
          appliedDate: app.appliedDate,
          notes: app.notes ?? '',
          jobUrl: app.jobUrl ?? '',
          salary: app.salary ?? '',
        });
      }
    });
  }

  onSubmit() {
    if (this.form.invalid) return;
    const value = this.form.value;
    const app: JobApplication = {
      id: this.application()?.id ?? '',
      company: value.company,
      position: value.position,
      status: value.status,
      appliedDate: value.appliedDate,
      notes: value.notes || undefined,
      jobUrl: value.jobUrl || undefined,
      salary: value.salary || undefined,
    };
    this.saved.emit(app);
  }

  onCancel() {
    this.cancelled.emit();
  }
}
