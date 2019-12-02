package com.codeclan.servicebooker;

import com.codeclan.servicebooker.models.jobs.Job;
import com.codeclan.servicebooker.models.reviews.Review;
import com.codeclan.servicebooker.models.users.customers.Customer;
import com.codeclan.servicebooker.models.users.freelancers.Freelancer;
import org.junit.Before;
import org.junit.Test;

import static org.junit.Assert.assertEquals;


public class CustomerTest {

    Customer customer1;
    Freelancer freelancer1;
    Job job1;
    Review review1;

    @Before
    public void before(){
        customer1 = new Customer("John Smith", "77 Renfrew Street", "john@gmail.com", "07898544265", "Glasgow", ";jfvj");
        freelancer1 = new Freelancer("Graham's Gairdens", "Hillington Road", "Gsgs@gairdener.com", "07451235699", "Hillington", "Garden", "jldjhqp");
        job1 = new Job("Grass cutting", "Glasgow", "Weekly cutting of front and back lawns", 9.99, 4, customer1);
        review1 = new Review(customer1, freelancer1, 5.00, "29/11/2019", "Graham's Gairdens have been my reliable gairdener for near on 20 years, I wouldn't go to anyone else");
    }

    @Test
    public void customerHasName() {
        assertEquals("John Smith", customer1.getName());
    }

    @Test
    public void canSetCustomerName() {
        customer1.setName("Dave Smith");
        assertEquals("Dave Smith", customer1.getName());
    }

    @Test
    public void canGetAddress() {
        assertEquals("77 Renfrew Street", customer1.getAddress());
    }

    @Test
    public void canSetCustomerAddress() {
        customer1.setAddress("56 Union Street");
        assertEquals("56 Union Street", customer1.getAddress());
    }

    @Test
    public void hasEmail() {
        assertEquals("john@gmail.com", customer1.getEmail());
    }

    @Test
    public void setEmail() {
        customer1.setEmail("john_s@gmail.com");
        assertEquals("john_s@gmail.com", customer1.getEmail());
    }

    @Test
    public void getTellNo() {
        assertEquals("07898544265", customer1.getTellNo());
    }

    @Test
    public void setTellNo() {
        customer1.setTellNo("07898544267");
        assertEquals("07898544267", customer1.getTellNo());
    }

    @Test
    public void getLocation() {
        assertEquals("Glasgow", customer1.getLocation());
    }

    @Test
    public void setLocation() {
        customer1.setLocation("Edinburgh");
        assertEquals("Edinburgh", customer1.getLocation());
    }

    @Test
    public void getRating() {
        assertEquals(0.00, customer1.getRating(), 0.01);
    }

    @Test
    public void setRating() {
        customer1.setRating(1.99);
        assertEquals(1.99, customer1.getRating(), 0.01);
    }

    @Test
    public void canAddJob() {
        customer1.addJob(job1);
        assertEquals(1, customer1.getLengthOfJobs());
    }

    @Test
    public void canRemoveJob() {
        customer1.addJob(job1);
        customer1.removeJob(job1);
        assertEquals(0, customer1.getLengthOfJobs());
    }

    @Test
    public void canAddReview() {
        customer1.addReview(review1);
        assertEquals(1, customer1.getReviewsLength());
    }

    @Test
    public void canRemoveReview() {
        customer1.addReview(review1);
        customer1.removeReview(review1);
        assertEquals(0, customer1.getReviewsLength());
    }
}
