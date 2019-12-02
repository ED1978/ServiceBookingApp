package com.codeclan.servicebooker;

import com.codeclan.servicebooker.models.users.freelancers.Freelancer;
import org.junit.Before;
import org.junit.Test;

import static org.junit.Assert.assertEquals;

public class FreelancerTest {

    Freelancer freelancer;

    @Before
    public void before(){
        freelancer = new Freelancer("Graham's Gairdens", "Hillington Road", "Gsgs@gairdener.com", "07451235699", "Hillington", "Garden", "lfve");
    }

    @Test
    public void getCategory() {
        assertEquals("Garden", freelancer.getCategory());
    }

    @Test
    public void setCategory() {
        freelancer.setCategory("Kitchen");
        assertEquals("Kitchen", freelancer.getCategory());
    }
}
