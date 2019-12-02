package com.codeclan.servicebooker.controllers;


import com.codeclan.servicebooker.models.jobs.Job;
import com.codeclan.servicebooker.repositories.jobs.JobRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping(value = "/api/jobs")
public class JobController {

    @Autowired
    JobRepository jobRepository;

    @GetMapping(value = "/customers/{id}")
    public List<Job> getJobByCustomerId(@PathVariable Long id) {
        return jobRepository.getJobByCustomerId(id);
    }
}
