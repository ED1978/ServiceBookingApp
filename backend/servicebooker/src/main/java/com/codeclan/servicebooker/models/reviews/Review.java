package com.codeclan.servicebooker.models.reviews;

import com.codeclan.servicebooker.models.jobs.Job;
import com.codeclan.servicebooker.models.users.customers.Customer;
import com.codeclan.servicebooker.models.users.freelancers.Freelancer;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;

@Entity
@Table(name = "reviews")
public class Review {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;
    @Column(name = "rating")
    private Double rating;
    @Column(name = "data")
    private String date;
    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "job_id")
    private Job job;
    @Column(name = "description")
    private String description;
    @ManyToOne
    @JsonIgnoreProperties(value = "reviews")
    @JoinColumn(name = "customer_id")
    private Customer customer;
    @ManyToOne
    @JsonIgnoreProperties(value = "reviews")
    @JoinColumn(name = "freelancer_id")
    private Freelancer freelancer;

    public Review(Customer customer, Freelancer freelancer, Double rating, String date, Job job, String description){
        this.customer = customer;
        this.freelancer = freelancer;
        this.rating = rating;
        this.date = date;
        this.job = job;
        this.description = description;
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

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }
}
