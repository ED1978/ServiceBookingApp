package com.codeclan.servicebooker;

import com.codeclan.servicebooker.models.jobs.Job;
import com.codeclan.servicebooker.models.users.customers.Customer;
import com.codeclan.servicebooker.models.users.freelancers.Freelancer;
import com.codeclan.servicebooker.repositories.freelancers.FreelancerRepository;
import com.codeclan.servicebooker.repositories.jobs.JobRepository;
import com.codeclan.servicebooker.repositories.customer.CustomerRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
class ServicebookerApplicationTests {

	@Autowired
	FreelancerRepository freelancerRepository;

	@Autowired
	JobRepository jobRepository;

	@Autowired
	CustomerRepository customerRepository;

	@Test
	void contextLoads() {
	}

	@Test
	void createFreelancer() {
		Freelancer freelancer1 = new Freelancer("Graham's Gairdens", "Hillington Road", "Gsgs@gairdener.com", "07451235699", "Hillington", "Garden");
		Freelancer freelancer2 = new Freelancer("John's Joiners", "Spey Road", "John@JsJNRS.co.uk", "07455122399", "Bearsden", "Building");
		freelancerRepository.save(freelancer1);
		freelancerRepository.save(freelancer2);
	}

	@Test
	void createJob() {
		Customer customer = new Customer("John Smith", "77 Renfrew Street", "jnvkjhsdf", "5435466868", "jsdlkjfwjkl");
		Job job = new Job("nsdfnsdj", "lndfkjrf", "kjfjkwkjf", 9.00, 8, customer);
		customerRepository.save(customer);
		jobRepository.save(job);
	}
}
