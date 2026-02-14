package com.jobtracker.dto;

import com.jobtracker.entity.JobApplication;
import com.jobtracker.entity.JobApplication.ApplicationStatus;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Pattern;

public class JobApplicationDto {

  private String id;

  @NotBlank(message = "Company is required")
  private String company;

  @NotBlank(message = "Position is required")
  private String position;

  @NotNull(message = "Status is required")
  private ApplicationStatus status;

  @NotBlank(message = "Applied date is required")
  @Pattern(regexp = "\\d{4}-\\d{2}-\\d{2}", message = "Date must be YYYY-MM-DD")
  private String appliedDate;

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
    entity.setId(id != null ? id : java.util.UUID.randomUUID().toString());
    entity.setCompany(company);
    entity.setPosition(position);
    entity.setStatus(status);
    entity.setAppliedDate(appliedDate);
    entity.setNotes(notes);
    entity.setJobUrl(jobUrl);
    entity.setSalary(salary);
    return entity;
  }

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
}
