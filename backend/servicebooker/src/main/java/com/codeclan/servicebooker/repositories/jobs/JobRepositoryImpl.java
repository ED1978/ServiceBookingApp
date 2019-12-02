package com.codeclan.servicebooker.repositories.jobs;

import com.codeclan.servicebooker.models.jobs.Job;
import com.codeclan.servicebooker.models.users.customers.Customer;
import org.hibernate.Criteria;
import org.hibernate.HibernateException;
import org.hibernate.Session;
import org.hibernate.criterion.Restrictions;
import org.springframework.beans.factory.annotation.Autowired;

import javax.persistence.EntityManager;
import javax.transaction.Transactional;
import java.util.List;

public class JobRepositoryImpl {

    @Autowired
    EntityManager entityManager;

    @Transactional
    public List<Job> getJobByCustomerId(Long customer_id) {
        List<Job> results = null;
        Session session = entityManager.unwrap(Session.class);

        try {
            Criteria cr = session.createCriteria(Job.class);
            cr.createAlias("customer", "customerAlias");
            cr.add(Restrictions.eq("customerAlias.Id", customer_id));
            results = cr.list();
        } catch (HibernateException ex) {
            ex.printStackTrace();
        } finally {
            session.close();
        }
        return results;
    }

}
