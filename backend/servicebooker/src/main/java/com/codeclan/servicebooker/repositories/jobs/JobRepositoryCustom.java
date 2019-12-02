package com.codeclan.servicebooker.repositories.jobs;

import com.codeclan.servicebooker.models.jobs.Job;

import java.util.List;

public interface JobRepositoryCustom {
    List<Job> getJobByCustomerId(Long customer_id);
}
