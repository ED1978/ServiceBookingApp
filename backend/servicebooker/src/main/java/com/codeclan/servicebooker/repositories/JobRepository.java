package com.codeclan.servicebooker.repositories;

import com.codeclan.servicebooker.models.jobs.Job;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface JobRepository extends JpaRepository<Job, Long > {
}
