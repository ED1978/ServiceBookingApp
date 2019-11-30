package com.codeclan.servicebooker.components;

import com.codeclan.servicebooker.models.jobs.Job;
import com.codeclan.servicebooker.models.reviews.Review;
import com.codeclan.servicebooker.models.users.customers.Customer;
import com.codeclan.servicebooker.models.users.freelancers.Freelancer;
import com.codeclan.servicebooker.repositories.FreelancerRepository;
import com.codeclan.servicebooker.repositories.JobRepository;
import com.codeclan.servicebooker.repositories.customer.CustomerRepository;
import com.codeclan.servicebooker.repositories.review.ReviewRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

@Component
public class DataLoader implements ApplicationRunner {

    @Autowired
    CustomerRepository customerRepository;

    @Autowired
    FreelancerRepository freelancerRepository;

    @Autowired
    ReviewRepository reviewRepository;

    @Autowired
    JobRepository jobRepository;

    public DataLoader(){

    }

    public void run(ApplicationArguments args) {
        Customer customer1 = new Customer("Adam", "1 Something street", "blabla@gmail.com", "01", "endoftheworld");
        customerRepository.save(customer1);

        Freelancer freelancer1 = new Freelancer("Eric", "2 Something street", "blabla2@gmail.com", "02", "somewhere", "finance");
        freelancerRepository.save(freelancer1);

        Review review1 = new Review(customer1, freelancer1, 4.5, "01-01-2017", "something fancy item");
        reviewRepository.save(review1);

        Job job1 = new Job("something", "somewhere", "something fancy description", 3.40, 5, customer1);
        jobRepository.save(job1);

        Job job2 = new Job("something", "somewhere", "something fancy description", 3.40, 5, customer1);
        jobRepository.save(job2);

        customer1.addJob(job2);
        customer1.addJob(job1);
        customerRepository.save(customer1);

    }

}
