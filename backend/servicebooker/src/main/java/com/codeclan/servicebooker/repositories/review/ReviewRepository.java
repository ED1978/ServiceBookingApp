package com.codeclan.servicebooker.repositories.review;

import com.codeclan.servicebooker.models.reviews.Review;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource
public interface ReviewRepository extends JpaRepository<Review, Long>, ReviewRepositoryCustom {

}
