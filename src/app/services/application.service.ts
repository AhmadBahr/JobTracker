import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { JobApplication } from '../models/application.model';

const API_URL = 'http://localhost:8080/api/applications';

@Injectable({
  providedIn: 'root',
})
export class ApplicationService {
  constructor(private http: HttpClient) {}

  getAll(): Observable<JobApplication[]> {
    return this.http.get<JobApplication[]>(API_URL);
  }

  getById(id: string): Observable<JobApplication | undefined> {
    return this.http.get<JobApplication>(`${API_URL}/${id}`);
  }

  create(application: Omit<JobApplication, 'id'>): Observable<JobApplication> {
    return this.http.post<JobApplication>(API_URL, application);
  }

  update(id: string, application: Partial<JobApplication>): Observable<JobApplication | null> {
    return this.http.put<JobApplication>(`${API_URL}/${id}`, { ...application, id });
  }

  delete(id: string): Observable<void> {
    return this.http.delete<void>(`${API_URL}/${id}`);
  }
}
