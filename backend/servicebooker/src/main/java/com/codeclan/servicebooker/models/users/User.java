package com.codeclan.servicebooker.models.users;

import javax.persistence.*;

@MappedSuperclass
public abstract class User{

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;
    @Column(name = "name")
    private String name;
    @Column(name = "address")
    private String address;
    @Column(name = "email")
    private String email;
    @Column(name = "tell_no")
    private String tellNo;
    @Column(name = "location")
    private String location;
    @Column(name = "rating")
    private Double rating;


    public User(String name, String address, String email, String tellNo, String location){
        this.name = name;
        this.address = address;
        this.email = email;
        this.tellNo = tellNo;
        this.location = location;
        this.rating = 0.00;
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


}
