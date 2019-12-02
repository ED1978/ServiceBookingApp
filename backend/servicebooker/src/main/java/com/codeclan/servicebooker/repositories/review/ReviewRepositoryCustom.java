package com.codeclan.servicebooker.repositories.review;

import com.codeclan.servicebooker.models.reviews.Review;

import java.util.List;

public interface ReviewRepositoryCustom {
    List<Review> getReviewByCustomerId(Long customer_id);
}
