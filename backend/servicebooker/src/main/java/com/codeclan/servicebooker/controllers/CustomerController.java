package com.codeclan.servicebooker.controllers;

import com.codeclan.servicebooker.models.jobs.Job;
import com.codeclan.servicebooker.models.users.customers.Customer;
import com.codeclan.servicebooker.repositories.customer.CustomerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping(value = "/customers")
public class CustomerController {

    @Autowired
    CustomerRepository customerRepository;

}
