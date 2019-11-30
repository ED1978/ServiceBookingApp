package com.codeclan.servicebooker.projections;

import com.codeclan.servicebooker.models.users.customers.Customer;
import com.codeclan.servicebooker.models.users.freelancers.Freelancer;
import org.springframework.data.rest.core.config.Projection;

@Projection(name = "embedReview", types = {Customer.class, Freelancer.class})
public interface EmbedReview {
    long getId();
    String getDescription();
    Double getRating();
    String getDate();
}
