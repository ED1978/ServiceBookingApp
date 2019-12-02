package com.codeclan.servicebooker.models.jobs;

import com.codeclan.servicebooker.models.users.customers.Customer;
import com.codeclan.servicebooker.models.users.freelancers.Freelancer;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "jobs")
public class Job {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long Id;

    @Column(name = "title")
    private String title;

    @Column(name = "location")
    private String location;

    @Column(name = "description")
    private String description;

    @Column(name = "price")
    private Double price;

    @Column(name = "duration")
    private Integer duration;

    @ManyToOne
    @JsonIgnoreProperties(value = "jobs")
    @JoinColumn(name = "customer_id")
    private Customer customer;

    @ManyToOne
    @JsonIgnoreProperties(value = "jobs")
    @JoinColumn(name = "freelancer_id")
    private Freelancer freelancer;

    @JsonIgnoreProperties(value = "jobs")
    @ManyToMany
    @JoinTable(
            name = "applicants_jobs",
            joinColumns = { @JoinColumn(
                    name = "job_id",
                    nullable = false,
                    updatable = false
            )},
            inverseJoinColumns = {@JoinColumn(
                    name = "freelancer_id",
                    nullable = false,
                    updatable = false
            )}
    )
    private List<Freelancer> applicants;

    public Job(String title, String location, String description, Double price, Integer duration, Customer customer){
        this.title = title;
        this.location = location;
        this.description = description;
        this.price = price;
        this.duration = duration;
        this.customer = customer;
        this.applicants = new ArrayList<Freelancer>();
    }

    public Job(){

    }

    public Long getId() {
        return Id;
    }

    public void addApplicant(Freelancer applicant){
        this.applicants.add(applicant);
    }

    public void setId(Long id) {
        this.Id = id;
    }

    public List<Freelancer> getApplicants() {
        return applicants;
    }

    public void setApplicants(List<Freelancer> applicants) {
        this.applicants = applicants;
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
