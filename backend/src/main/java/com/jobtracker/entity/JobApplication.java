package com.jobtracker.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import java.util.UUID;

@Entity
@Table(name = "job_applications")
public class JobApplication {

  @Id
  private String id;

  @Column(nullable = false)
  private String company;

  @Column(nullable = false)
  private String position;

  @Enumerated(EnumType.STRING)
  @Column(nullable = false)
  private ApplicationStatus status;

  @Column(name = "applied_date", nullable = false)
  private String appliedDate;

  @Column(length = 2000)
  private String notes;

  @Column(name = "job_url")
  private String jobUrl;

  private String salary;

  public JobApplication() {}

  public String getId() {
    return id;
  }

  public void setId(String id) {
    this.id = id;
  }

  public String getCompany() {
    return company;
  }

  public void setCompany(String company) {
    this.company = company;
  }

  public String getPosition() {
    return position;
  }

  public void setPosition(String position) {
    this.position = position;
  }

  public ApplicationStatus getStatus() {
    return status;
  }

  public void setStatus(ApplicationStatus status) {
    this.status = status;
  }

  public String getAppliedDate() {
    return appliedDate;
  }

  public void setAppliedDate(String appliedDate) {
    this.appliedDate = appliedDate;
  }

  public String getNotes() {
    return notes;
  }

  public void setNotes(String notes) {
    this.notes = notes;
  }

  public String getJobUrl() {
    return jobUrl;
  }

  public void setJobUrl(String jobUrl) {
    this.jobUrl = jobUrl;
  }

  public String getSalary() {
    return salary;
  }

  public void setSalary(String salary) {
    this.salary = salary;
  }

  public enum ApplicationStatus {
    Applied, Interview, Offered, Rejected
  }
}
