package com.codeclan.servicebooker.repositories.freelancers;

import com.codeclan.servicebooker.models.users.freelancers.Freelancer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FreelancerRepository extends JpaRepository<Freelancer, Long> {
}
