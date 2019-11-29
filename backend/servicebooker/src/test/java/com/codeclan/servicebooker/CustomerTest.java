package com.codeclan.servicebooker;

import com.codeclan.servicebooker.models.users.customers.Customer;
import org.junit.Before;
import org.junit.Test;

import static org.junit.Assert.assertEquals;


public class CustomerTest {

    Customer customer1;

    @Before
    public void before(){
        customer1 = new Customer("John Smith", "77 Renfrew Street", "john@gmail.com", "07898544265", "Glasgow");
    }

    @Test
    public void customerHasName() {
        assertEquals("John Smith", customer1.getName());
    }
}
