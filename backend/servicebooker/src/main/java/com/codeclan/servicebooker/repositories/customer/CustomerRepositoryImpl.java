package com.codeclan.servicebooker.repositories.customer;

import com.codeclan.servicebooker.models.jobs.Job;
import com.jayway.jsonpath.Criteria;
import org.hibernate.HibernateException;
import org.springframework.beans.factory.annotation.Autowired;

import javax.persistence.EntityManager;
import javax.transaction.Transactional;
import javax.websocket.Session;
import java.util.List;

public class CustomerRepositoryImpl implements CustomerRepositoryCustom{

    @Autowired
    EntityManager entityManager;

}
