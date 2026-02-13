package com.jobtracker.controller;

import com.jobtracker.dto.JobApplicationDto;
import com.jobtracker.entity.JobApplication;
import com.jobtracker.service.JobApplicationService;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/applications")
@CrossOrigin(origins = "http://localhost:4200")
public class JobApplicationController {

  private final JobApplicationService service;

  public JobApplicationController(JobApplicationService service) {
    this.service = service;
  }

  @GetMapping
  public List<JobApplicationDto> getAll() {
    return service.findAll().stream()
        .map(JobApplicationDto::fromEntity)
        .toList();
  }

  @GetMapping("/{id}")
  public ResponseEntity<JobApplicationDto> getById(@PathVariable String id) {
    return service.findById(id)
        .map(JobApplicationDto::fromEntity)
        .map(ResponseEntity::ok)
        .orElse(ResponseEntity.notFound().build());
  }

  @PostMapping
  public ResponseEntity<JobApplicationDto> create(@Valid @RequestBody JobApplicationDto dto) {
    JobApplication entity = dto.toEntity();
    JobApplication created = service.create(entity);
    return ResponseEntity.status(HttpStatus.CREATED).body(JobApplicationDto.fromEntity(created));
  }

  @PutMapping("/{id}")
  public ResponseEntity<JobApplicationDto> update(
      @PathVariable String id,
      @Valid @RequestBody JobApplicationDto dto
  ) {
    JobApplication entity = dto.toEntity();
    entity.setId(id);
    return service.update(id, entity)
        .map(JobApplicationDto::fromEntity)
        .map(ResponseEntity::ok)
        .orElse(ResponseEntity.notFound().build());
  }

  @DeleteMapping("/{id}")
  public ResponseEntity<Void> delete(@PathVariable String id) {
    if (!service.delete(id)) {
      return ResponseEntity.notFound().build();
    }
    return ResponseEntity.noContent().build();
  }
}
