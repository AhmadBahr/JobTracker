export type ApplicationStatus = 'Applied' | 'Interview' | 'Offered' | 'Rejected';

export interface JobApplication {
  id: string;
  company: string;
  position: string;
  status: ApplicationStatus;
  appliedDate: string;
  notes?: string;
  jobUrl?: string;
  salary?: string;
}
