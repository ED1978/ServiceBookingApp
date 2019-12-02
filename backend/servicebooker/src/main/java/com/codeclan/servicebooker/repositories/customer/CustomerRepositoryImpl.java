package com.codeclan.servicebooker.repositories.customer;

import com.codeclan.servicebooker.models.jobs.Job;
import org.hibernate.Criteria;
import org.hibernate.HibernateException;
import org.hibernate.Session;
import org.springframework.beans.factory.annotation.Autowired;

import javax.persistence.EntityManager;
import javax.transaction.Transactional;
import java.util.List;

public class CustomerRepositoryImpl implements CustomerRepositoryCustom{

    @Autowired
    EntityManager entityManager;


}
