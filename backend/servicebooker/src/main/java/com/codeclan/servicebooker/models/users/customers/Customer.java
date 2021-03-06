package com.codeclan.servicebooker.models.users.customers;

import com.codeclan.servicebooker.models.jobs.Job;
import com.codeclan.servicebooker.models.reviews.Review;
import com.codeclan.servicebooker.models.users.User;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "customers")
public class Customer extends User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long Id;

    @OneToMany(mappedBy = "customer", fetch = FetchType.LAZY)
    @JsonIgnoreProperties(value = "customer")
    private List<Job> jobs;

    @OneToMany(mappedBy = "customer", fetch = FetchType.LAZY)
    @JsonIgnoreProperties(value = "customer")
    private List<Review> reviews;

    @Column(name = "user_type")
    private String userType;

    public Customer(String name, String address, String location, String email, String tellNo, String password){
        super(name, address, email, tellNo, location, password);
        this.jobs = new ArrayList<Job>();
        this.reviews = new ArrayList<Review>();
        this.userType = "customer";
    }

    public Customer(){

    }

    public List<Job> getJobs() {
        return jobs;
    }

    public int getLengthOfJobs(){
        return this.jobs.size()
;    }

    public void setJobs(List<Job> jobs) {
        this.jobs = jobs;
    }

    public void addJob(Job job){
        this.jobs.add(job);
    }

    public void removeJob(Job job){
        if (this.jobs.contains(job)){
            this.jobs.remove(job);
        }
    }

    public int getReviewsLength(){
        return this.reviews.size();
    }

    public List<Review> getReviews() {
        return reviews;
    }

    public void setReviews(List<Review> reviews) {
        this.reviews = reviews;
    }

    public void addReview(Review review){
        this.reviews.add(review);
    }

    public void removeReview(Review review){
        if(this.reviews.contains(review)){
            this.reviews.remove(review);
        }
    }

    public Long getId() {
        return Id;
    }

    public void setId(Long id) {
        this.Id = id;
    }

    public String getUserType() {
        return userType;
    }

    public void setUserType(String userType) {
        this.userType = userType;
    }
}
