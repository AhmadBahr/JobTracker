package com.jobtracker.service;

import com.jobtracker.entity.JobApplication;
import com.jobtracker.repository.JobApplicationRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
public class JobApplicationService {

  private final JobApplicationRepository repository;

  public JobApplicationService(JobApplicationRepository repository) {
    this.repository = repository;
  }

  public List<JobApplication> findAll() {
    return repository.findAllByOrderByAppliedDateDesc();
  }

  public Optional<JobApplication> findById(String id) {
    return repository.findById(id);
  }

  @Transactional
  public JobApplication create(JobApplication application) {
    application.setId(null); // Let JPA generate UUID
    return repository.save(application);
  }

  @Transactional
  public Optional<JobApplication> update(String id, JobApplication update) {
    return repository.findById(id)
        .map(existing -> {
          if (update.getCompany() != null) existing.setCompany(update.getCompany());
          if (update.getPosition() != null) existing.setPosition(update.getPosition());
          if (update.getStatus() != null) existing.setStatus(update.getStatus());
          if (update.getAppliedDate() != null) existing.setAppliedDate(update.getAppliedDate());
          if (update.getNotes() != null) existing.setNotes(update.getNotes());
          if (update.getJobUrl() != null) existing.setJobUrl(update.getJobUrl());
          if (update.getSalary() != null) existing.setSalary(update.getSalary());
          return repository.save(existing);
        });
  }

  @Transactional
  public boolean delete(String id) {
    if (!repository.existsById(id)) return false;
    repository.deleteById(id);
    return true;
  }
}
