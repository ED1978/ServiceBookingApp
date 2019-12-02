package com.codeclan.servicebooker.controllers;

import com.codeclan.servicebooker.models.reviews.Review;
import com.codeclan.servicebooker.repositories.review.ReviewRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping(value = "/api/reviews")
public class ReviewController {

    @Autowired
    ReviewRepository reviewRepository;

    @GetMapping(value = "customers/{id}")
    public List<Review> getReviewByCustomerId(@PathVariable Long id) {
        return reviewRepository.getReviewByCustomerId(id);
    }

}
