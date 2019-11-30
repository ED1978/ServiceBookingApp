package com.codeclan.servicebooker.repositories.review;

import org.springframework.beans.factory.annotation.Autowired;

import javax.persistence.EntityManager;

public class ReviewRepositoryImpl implements ReviewRepositoryCustom{

    @Autowired
    EntityManager entityManager;


}
