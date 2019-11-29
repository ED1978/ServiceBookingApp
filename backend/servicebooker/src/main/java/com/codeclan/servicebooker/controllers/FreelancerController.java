package com.codeclan.servicebooker.controllers;


import com.codeclan.servicebooker.models.users.freelancers.Freelancer;
import com.codeclan.servicebooker.repositories.FreelancerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping(value = "/freelancers")
public class FreelancerController {

    @Autowired
    FreelancerRepository freelancerRepository;

    @GetMapping
    public List<Freelancer>  getAllFreeLancers(){
        return freelancerRepository.findAll();
    }

    @GetMapping("{id}")
    public Optional<Freelancer> getFreelancer(@PathVariable Long id){
        return freelancerRepository.findById(id);
    }

}
