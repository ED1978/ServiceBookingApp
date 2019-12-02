package com.codeclan.servicebooker.repositories.customer;

import com.codeclan.servicebooker.models.jobs.Job;
import com.codeclan.servicebooker.models.users.customers.Customer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import java.util.List;

@RepositoryRestResource
public interface CustomerRepository extends JpaRepository<Customer, Long>, CustomerRepositoryCustom {
}
