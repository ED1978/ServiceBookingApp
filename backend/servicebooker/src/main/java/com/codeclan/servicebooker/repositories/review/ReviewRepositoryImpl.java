package com.codeclan.servicebooker.repositories.review;

import com.codeclan.servicebooker.models.reviews.Review;
import org.hibernate.Criteria;
import org.hibernate.HibernateException;
import org.hibernate.Session;
import org.hibernate.criterion.Restrictions;
import org.springframework.beans.factory.annotation.Autowired;

import javax.persistence.EntityManager;
import javax.transaction.Transactional;
import java.util.List;

public class ReviewRepositoryImpl implements ReviewRepositoryCustom{

    @Autowired
    EntityManager entityManager;

    @Transactional
    public List<Review> getReviewByCustomerId(Long customer_id) {
        List<Review> results = null;
        Session session = entityManager.unwrap(Session.class);

        try {
            Criteria cr = session.createCriteria(Review.class);
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
