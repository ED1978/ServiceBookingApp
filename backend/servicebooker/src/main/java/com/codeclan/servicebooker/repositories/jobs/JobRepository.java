package com.codeclan.servicebooker.repositories.jobs;

import com.codeclan.servicebooker.models.jobs.Job;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.stereotype.Repository;

import java.util.List;

@RepositoryRestResource
public interface JobRepository extends JpaRepository<Job, Long>, JobRepositoryCustom {
}
