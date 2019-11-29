package com.codeclan.servicebooker.models.jobs;

import com.codeclan.servicebooker.models.users.customers.Customer;
import com.codeclan.servicebooker.models.users.freelancers.Freelancer;

public class Job {

    private String title;
    private String location;
    private String description;
    private Double price;
    private Integer duration;
    private Customer customer;
    private Freelancer freelancer;

    public Job(String title, String location, String description, Double price, Integer duration, Customer customer){
        this.title = title;
        this.location = location;
        this.description = description;
        this.price = price;
        this.duration = duration;
        this.customer = customer;
    }

    public Job(){

    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Double getPrice() {
        return price;
    }

    public void setPrice(Double price) {
        this.price = price;
    }

    public Integer getDuration() {
        return duration;
    }

    public void setDuration(Integer duration) {
        this.duration = duration;
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
}
