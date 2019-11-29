package com.codeclan.servicebooker.models.customers;

import com.codeclan.servicebooker.models.User;

public class Customer extends User {

    private List<Job> jobs;

    public Customer(String name, String address, String email, String tellNo, String location){
        super(name, address, email, tellNo, location);
        this.jobs = new ArrayList<Job>();
    }

    public Customer(){

    }

    public List<Job> getJobs() {
        return jobs;
    }

    public void setJobs(List<Job> jobs) {
        this.jobs = jobs;
    }

    public void addJob(Job job){
        this.jobs.add(job);
    }
}
