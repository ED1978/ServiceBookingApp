package com.codeclan.servicebooker.models.users.freelancers;

import com.codeclan.servicebooker.models.jobs.Job;
import com.codeclan.servicebooker.models.reviews.Review;
import com.codeclan.servicebooker.models.users.User;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "freelancers")
public class Freelancer extends User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name = "category")
    private String category;

    @OneToMany(mappedBy = "freelancer", fetch = FetchType.LAZY)
    @JsonIgnoreProperties(value = "freelancer")
    private List<Review> reviews;

    @OneToMany(mappedBy = "freelancer", fetch = FetchType.LAZY)
    @JsonIgnoreProperties(value = "freelancer")
    private List<Job> jobs;

    @JsonIgnoreProperties(value="freelancers")
    @ManyToMany
    @JoinTable(
            name = "applicants_jobs",
            joinColumns = { @JoinColumn(
                    name = "freelancer_id",
                    nullable = false,
                    updatable = false
            )},
            inverseJoinColumns = { @JoinColumn(
                    name = "job_id",
                    nullable = false,
                    updatable = false
            )}
    )
    private List<Job> applications;

    public Freelancer(String name, String address, String email, String tellNo, String location, String category){
        super(name, address, email, tellNo, location);
        this.category = category;
        this.reviews = new ArrayList<Review>();
        this.jobs = new ArrayList<Job>();
    }

    public Freelancer(){

    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
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


    public List<Job> getJobs() {
        return jobs;
    }

    public void setJobs(List<Job> jobs) {
        this.jobs = jobs;
    }

    public List<Job> getApplications() {
        return applications;
    }

    public void setApplications(List<Job> applications) {
        this.applications = applications;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }
}
