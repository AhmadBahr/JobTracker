package com.jobtracker.dto;

import com.jobtracker.entity.JobApplication;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

import java.time.LocalDate;

public class JobApplicationDto {

  private String id;
  @NotBlank private String company;
  @NotBlank private String position;
  @NotBlank private String status;
  @NotNull private LocalDate appliedDate;
  private String notes;
  private String jobUrl;
  private String salary;

  public static JobApplicationDto fromEntity(JobApplication entity) {
    JobApplicationDto dto = new JobApplicationDto();
    dto.setId(entity.getId());
    dto.setCompany(entity.getCompany());
    dto.setPosition(entity.getPosition());
    dto.setStatus(entity.getStatus());
    dto.setAppliedDate(entity.getAppliedDate());
    dto.setNotes(entity.getNotes());
    dto.setJobUrl(entity.getJobUrl());
    dto.setSalary(entity.getSalary());
    return dto;
  }

  public JobApplication toEntity() {
    JobApplication entity = new JobApplication();
    entity.setId(this.id);
    entity.setCompany(this.company);
    entity.setPosition(this.position);
    entity.setStatus(this.status);
    entity.setAppliedDate(this.appliedDate);
    entity.setNotes(this.notes);
    entity.setJobUrl(this.jobUrl);
    entity.setSalary(this.salary);
    return entity;
  }

  public String getId() { return id; }
  public void setId(String id) { this.id = id; }
  public String getCompany() { return company; }
  public void setCompany(String company) { this.company = company; }
  public String getPosition() { return position; }
  public void setPosition(String position) { this.position = position; }
  public String getStatus() { return status; }
  public void setStatus(String status) { this.status = status; }
  public LocalDate getAppliedDate() { return appliedDate; }
  public void setAppliedDate(LocalDate appliedDate) { this.appliedDate = appliedDate; }
  public String getNotes() { return notes; }
  public void setNotes(String notes) { this.notes = notes; }
  public String getJobUrl() { return jobUrl; }
  public void setJobUrl(String jobUrl) { this.jobUrl = jobUrl; }
  public String getSalary() { return salary; }
  public void setSalary(String salary) { this.salary = salary; }
}
