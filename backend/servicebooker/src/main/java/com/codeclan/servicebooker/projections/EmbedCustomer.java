package com.codeclan.servicebooker.projections;

import com.codeclan.servicebooker.models.jobs.Job;
import com.codeclan.servicebooker.models.reviews.Review;
import org.springframework.data.rest.core.config.Projection;

import java.util.List;

@Projection(name = "embedCustomer", types = {Job.class, Review.class})
public interface EmbedCustomer {
    long getId();
    String getName();
    String getEmail();
    Integer getTellNo();
    String getLocation();
    List<Job> getJob();
    Double getRating();
}
