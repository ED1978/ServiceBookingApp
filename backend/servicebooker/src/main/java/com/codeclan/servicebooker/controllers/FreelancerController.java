package com.codeclan.servicebooker.controllers;


import com.codeclan.servicebooker.models.users.freelancers.Freelancer;
import com.codeclan.servicebooker.repositories.FreelancerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping(value = "/freelancers")
public class FreelancerController {

    @Autowired
    FreelancerRepository freelancerRepository;

    @GetMapping
    public List<Freelancer>  getAllFreeLancers(){
        return freelancerRepository.findAll();
    }

}
