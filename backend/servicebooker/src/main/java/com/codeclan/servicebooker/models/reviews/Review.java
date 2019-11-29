package com.codeclan.servicebooker.models.reviews;

import com.codeclan.servicebooker.models.jobs.Job;
import com.codeclan.servicebooker.models.users.customers.Customer;
import com.codeclan.servicebooker.models.users.freelancers.Freelancer;


public class Review {

    private Customer customer;
    private Freelancer freelancer;
    private Double rating;
    private String date;
    private Job job;

    public Review(Customer customer, Freelancer freelancer, Double rating, String date, Job job){
        this.customer = customer;
        this.freelancer = freelancer;
        this.rating = rating;
        this.date = date;
        this.job = job;
    }

    public Review(){

    }

    public Customer getCustomer() {
        return customer;
    }

    public void setCustomer(Customer customer) {
        this.customer = customer;
    }

    public Freelancer getFreelancer() {
        return freelancer;
    }

    public void setFreelancer(Freelancer freelancer) {
        this.freelancer = freelancer;
    }

    public Double getRating() {
        return rating;
    }

    public void setRating(Double rating) {
        this.rating = rating;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public Job getJob() {
        return job;
    }

    public void setJob(Job job) {
        this.job = job;
    }
}
