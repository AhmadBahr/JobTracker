package com.jobtracker.service;

import com.jobtracker.entity.JobApplication;
import com.jobtracker.repository.JobApplicationRepository;
import java.util.List;
import java.util.Optional;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class JobApplicationService {

  private final JobApplicationRepository repository;

  public JobApplicationService(JobApplicationRepository repository) {
    this.repository = repository;
  }

  public List<JobApplication> findAll() {
    return repository.findAll();
  }

  public Optional<JobApplication> findById(String id) {
    return repository.findById(id);
  }

  @Transactional
  public JobApplication create(JobApplication entity) {
    if (entity.getId() == null || entity.getId().isBlank()) {
      entity.setId(java.util.UUID.randomUUID().toString());
    }
    return repository.save(entity);
  }

  @Transactional
  public Optional<JobApplication> update(String id, JobApplication entity) {
    if (!repository.existsById(id)) {
      return Optional.empty();
    }
    entity.setId(id);
    return Optional.of(repository.save(entity));
  }

  @Transactional
  public boolean delete(String id) {
    if (!repository.existsById(id)) {
      return false;
    }
    repository.deleteById(id);
    return true;
  }
}
