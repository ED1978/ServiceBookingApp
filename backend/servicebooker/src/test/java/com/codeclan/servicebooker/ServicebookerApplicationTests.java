package com.codeclan.servicebooker;

import com.codeclan.servicebooker.models.users.freelancers.Freelancer;
import com.codeclan.servicebooker.repositories.FreelancerRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
class ServicebookerApplicationTests {

	@Autowired
	FreelancerRepository freelancerRepository;

	@Test
	void contextLoads() {
	}

	@Test
	void createFreelancer() {
		Freelancer freelancer = new Freelancer("Graham's Gairdens", "Hillington Road", "Gsgs@gairdener.com", "07451235699", "Hillington", "Garden");
		freelancerRepository.save(freelancer);
	}
}
