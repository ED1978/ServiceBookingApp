package com.codeclan.servicebooker.components;

import com.codeclan.servicebooker.models.jobs.Job;
import com.codeclan.servicebooker.models.reviews.Review;
import com.codeclan.servicebooker.models.users.customers.Customer;
import com.codeclan.servicebooker.models.users.freelancers.Freelancer;
import com.codeclan.servicebooker.repositories.freelancers.FreelancerRepository;
import com.codeclan.servicebooker.repositories.jobs.JobRepository;
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

//         CUSTOMERS:

        Customer customer1 = new Customer("Adam Hidvegi", "1 Renfrew Street", "Glasgow", "sample1@gmail.com", "07400123456", "password1");
        customerRepository.save(customer1);

        Customer customer2 = new Customer("Alan Turing", "2 Renfrew Street", "Glasgow", "sample2@gmail.com", "07400123456", "password2");
        customerRepository.save(customer2);

        Customer customer3 = new Customer("Tim Berners-Lee", "3 Renfrew Street", "Glasgow", "sample3@gmail.com", "07400123456", "password3");
        customerRepository.save(customer3);

        Customer customer4 = new Customer("Ada Lovelace", "4 Renfrew Street", "Glasgow", "sample@4gmail.com", "07400123456", "password4");
        customerRepository.save(customer4);

        Customer customer5 = new Customer("Satoshi Nakamoto", "5 Renfrew Street", "Glasgow", "sample5@gmail.com", "07400123456", "password5");
        customerRepository.save(customer5);

        Customer customer6 = new Customer("Linus Torvalds", "6 Renfrew Street", "Glasgow", "sample6@gmail.com", "07400123456", "password6");
        customerRepository.save(customer6);

        Customer customer7 = new Customer("Ken Thompson", "7 Renfrew Street", "Glasgow", "sample7@gmail.com", "07400123456", "password7");
        customerRepository.save(customer7);

        Customer customer8 = new Customer("Mark Zuckerberg", "8 Renfrew Street", "Glasgow", "sample8@gmail.com", "07400123456", "password8");
        customerRepository.save(customer8);

        Customer customer9 = new Customer("Bill Gates", "9 Renfrew Street", "Glasgow", "sample9@gmail.com", "07400123456", "password9");
        customerRepository.save(customer9);

        Customer customer10 = new Customer("Larry Page", "10 Renfrew Street", "Glasgow", "sample10@gmail.com", "07400123456", "password10");
        customerRepository.save(customer10);

//        FREELANCERS:

        Freelancer freelancer1 = new Freelancer("Eric Downie", "1 Hope Street", "Glasgow", "sample11@gmail.com", "07400123456", "finance", "password11");
        freelancerRepository.save(freelancer1);

        Freelancer freelancer2 = new Freelancer("Girolamo Cardano", "2 Hope Street", "Glasgow", "sample12@gmail.com", "07400123456", "finance", "password12");
        freelancerRepository.save(freelancer2);

        Freelancer freelancer3 = new Freelancer("Leonhard Euler", "3 Hope Street", "Glasgow", "sample13@gmail.com", "07400123456", "finance", "password13");
        freelancerRepository.save(freelancer3);

        Freelancer freelancer4 = new Freelancer("Carl Friedrich Gauss", "4 Hope Street", "Glasgow", "sample14@gmail.com", "07400123456", "finance", "password14");
        freelancerRepository.save(freelancer4);

        Freelancer freelancer5 = new Freelancer("Georg Cantor", "5 Hope Street", "Glasgow", "sample15@gmail.com", "07400123456", "finance", "password15");
        freelancerRepository.save(freelancer5);

        Freelancer freelancer6 = new Freelancer("Paul Erdös", "6 Hope Street", "Glasgow", "sample16@gmail.com", "07400123456", "finance", "password16");
        freelancerRepository.save(freelancer6);

        Freelancer freelancer7 = new Freelancer("Isaac Newton", "7 Hope Street", "Glasgow", "sample17@gmail.com", "07400123456", "finance", "password17");
        freelancerRepository.save(freelancer7);

        Freelancer freelancer8 = new Freelancer("Wilhelm Leibniz", "8 Hope Street", "Glasgow", "sample18@gmail.com", "07400123456", "finance", "password18");
        freelancerRepository.save(freelancer8);

        Freelancer freelancer9 = new Freelancer("René Descartes", "9 Hope Street", "Glasgow", "sample19@gmail.com", "07400123456", "finance", "password19");
        freelancerRepository.save(freelancer9);

        Freelancer freelancer10 = new Freelancer("G. F. Bernhard Riemann", "10 Hope Street", "Glasgow", "sample20@gmail.com", "07400123456", "finance", "password20");
        freelancerRepository.save(freelancer10);

//        RATINGS:

        Review review1 = new Review(customer1, freelancer1, 5.0, "01-01-2017", "something fancy item");
        reviewRepository.save(review1);

        Review review2 = new Review(customer2, freelancer2, 4.5, "01-01-2017", "something fancy item");
        reviewRepository.save(review2);

        Review review3 = new Review(customer3, freelancer3, 4.0, "01-01-2017", "something fancy item");
        reviewRepository.save(review3);

        Review review4 = new Review(customer4, freelancer4, 3.5, "01-01-2017", "something fancy item");
        reviewRepository.save(review4);

        Review review5 = new Review(customer5, freelancer5, 3.0, "01-01-2017", "something fancy item");
        reviewRepository.save(review5);

        Review review6 = new Review(customer6, freelancer6, 2.5, "01-01-2017", "something fancy item");
        reviewRepository.save(review6);

        Review review7 = new Review(customer7, freelancer7, 2.0, "01-01-2017", "something fancy item");
        reviewRepository.save(review7);

        Review review8 = new Review(customer8, freelancer8, 1.5, "01-01-2017", "something fancy item");
        reviewRepository.save(review8);

        Review review9 = new Review(customer9, freelancer9, 1.0, "01-01-2017", "something fancy item");
        reviewRepository.save(review9);

        Review review10 = new Review(customer10, freelancer10, 1.0, "01-01-2017", "something fancy item");
        reviewRepository.save(review10);

        Review review11 = new Review(customer1, freelancer1, 1.5, "01-01-2017", "something fancy item");
        reviewRepository.save(review11);

        Review review12 = new Review(customer2, freelancer2, 2.0, "01-01-2017", "something fancy item");
        reviewRepository.save(review12);

        Review review13 = new Review(customer3, freelancer3, 2.5, "01-01-2017", "something fancy item");
        reviewRepository.save(review13);

        Review review14 = new Review(customer4, freelancer4, 3.0, "01-01-2017", "something fancy item");
        reviewRepository.save(review14);

        Review review15 = new Review(customer5, freelancer5, 3.5, "01-01-2017", "something fancy item");
        reviewRepository.save(review15);

        Review review16 = new Review(customer6, freelancer6, 4.0, "01-01-2017", "something fancy item");
        reviewRepository.save(review16);

        Review review17 = new Review(customer7, freelancer7, 4.5, "01-01-2017", "something fancy item");
        reviewRepository.save(review17);

        Review review18 = new Review(customer8, freelancer8, 5.0, "01-01-2017", "something fancy item");
        reviewRepository.save(review18);

        Review review19 = new Review(customer9, freelancer9, 5.0, "01-01-2017", "something fancy item");
        reviewRepository.save(review19);

        Review review20 = new Review(customer10, freelancer10, 4.5, "01-01-2017", "something fancy item");
        reviewRepository.save(review20);

//        JOBS:

        Job job1 = new Job("Software Developer", "Glasgow", "Looking for experienced web developers, that have experience with data analytics and visualizations. Open to various backgrounds.", 12.50, 5, customer1);
        jobRepository.save(job1);

        Job job2 = new Job("Webdesigner", "Glasgow", "Looking for experienced web developers, that have experience with data analytics and visualizations. Open to various backgrounds.", 12.50, 5, customer2);
        jobRepository.save(job2);

        Job job3 = new Job("Java Developer", "Glasgow", "Looking for experienced web developers, that have experience with data analytics and visualizations. Open to various backgrounds.", 12.50, 5, customer3);
        jobRepository.save(job3);

        Job job4 = new Job("JavaScript Developer", "Glasgow", "Looking for experienced web developers, that have experience with data analytics and visualizations. Open to various backgrounds.", 12.50, 5, customer4);
        jobRepository.save(job4);

        Job job5 = new Job("Back-end Developer", "Glasgow", "Looking for experienced web developers, that have experience with data analytics and visualizations. Open to various backgrounds.", 12.50, 5, customer5);
        jobRepository.save(job5);

        Job job6 = new Job("Front-end Developer", "Glasgow", "Looking for experienced web developers, that have experience with data analytics and visualizations. Open to various backgrounds.", 12.50, 5, customer6);
        jobRepository.save(job6);

        Job job7 = new Job("UX/UI Designer", "Glasgow", "Looking for experienced web developers, that have experience with data analytics and visualizations. Open to various backgrounds.", 12.50, 5, customer7);
        jobRepository.save(job7);

        Job job8 = new Job("Software Engineer", "Glasgow", "Looking for experienced web developers, that have experience with data analytics and visualizations. Open to various backgrounds.", 12.50, 5, customer8);
        jobRepository.save(job8);

        Job job9 = new Job("Ruby Developer", "Glasgow", "Looking for experienced web developers, that have experience with data analytics and visualizations. Open to various backgrounds.", 12.50, 5, customer9);
        jobRepository.save(job9);

        Job job10 = new Job("Data Scientist", "Glasgow", "Looking for experienced web developers, that have experience with data analytics and visualizations. Open to various backgrounds.", 12.50, 5, customer10);
        jobRepository.save(job10);

        Job job11 = new Job("Data Scientist", "Glasgow", "Looking for experienced web developers, that have experience with data analytics and visualizations. Open to various backgrounds.", 12.50, 5, customer1);
        jobRepository.save(job11);

        Job job12 = new Job("Ruby Developer", "Glasgow", "Looking for experienced web developers, that have experience with data analytics and visualizations. Open to various backgrounds.", 12.50, 5, customer2);
        jobRepository.save(job12);

        Job job13 = new Job("Software Engineer", "Glasgow", "Looking for experienced web developers, that have experience with data analytics and visualizations. Open to various backgrounds.", 12.50, 5, customer3);
        jobRepository.save(job13);

        Job job14 = new Job("UX/UI Designer", "Glasgow", "Looking for experienced web developers, that have experience with data analytics and visualizations. Open to various backgrounds.", 12.50, 5, customer4);
        jobRepository.save(job14);

        Job job15 = new Job("Front-end Developer", "Glasgow", "Looking for experienced web developers, that have experience with data analytics and visualizations. Open to various backgrounds.", 12.50, 5, customer5);
        jobRepository.save(job15);

        Job job16 = new Job("Back-end Developer", "somewhere", "Looking for experienced web developers, that have experience with data analytics and visualizations. Open to various backgrounds.", 12.50, 5, customer6);
        jobRepository.save(job16);

        Job job17 = new Job("JavaScript Developer", "somewhere", "Looking for experienced web developers, that have experience with data analytics and visualizations. Open to various backgrounds.", 12.50, 5, customer7);
        jobRepository.save(job17);

        Job job18 = new Job("Java Developer", "somewhere", "Looking for experienced web developers, that have experience with data analytics and visualizations. Open to various backgrounds.", 12.50, 5, customer8);
        jobRepository.save(job18);

        Job job19 = new Job("Webdesigner", "somewhere", "Looking for experienced web developers, that have experience with data analytics and visualizations. Open to various backgrounds.", 12.50, 5, customer9);
        jobRepository.save(job19);

        Job job20 = new Job("Software Developer", "somewhere", "Looking for experienced web developers, that have experience with data analytics and visualizations. Open to various backgrounds.", 12.50, 10, customer10);
        jobRepository.save(job20);

//        customer1.addJob(job2);
//        customer1.addJob(job1);
//        customerRepository.save(customer1);

    }

}
