package com.codeclan.servicebooker.models.users;

import com.codeclan.servicebooker.models.reviews.Review;

import java.util.ArrayList;
import java.util.List;

public abstract class User {

    private String name;
    private String address;
    private String email;
    private String tellNo;
    private String location;
    private Double rating;
    private List<Review> reviews;

    public User(String name, String address, String email, String tellNo, String location){
        this.name = name;
        this.address = address;
        this.email = email;
        this.tellNo = tellNo;
        this.location = location;
        this.rating = 0.00;
        this.reviews = new ArrayList<Review>();
    }

    public User(){

    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getTellNo() {
        return tellNo;
    }

    public void setTellNo(String tellNo) {
        this.tellNo = tellNo;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public Double getRating() {
        return rating;
    }

    public void setRating(Double rating) {
        this.rating = rating;
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
}
