package com.codeclan.servicebooker.models.users.freelancers;

import com.codeclan.servicebooker.models.users.User;

public class Freelancer extends User {

    private String category;

    public Freelancer(String name, String address, String email, String tellNo, String location, String category){
        super(name, address, email, tellNo, location);
        this.category = category;
    }

    public Freelancer(){

    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }
}
