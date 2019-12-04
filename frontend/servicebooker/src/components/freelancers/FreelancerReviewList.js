import React from 'react';
import FreelancerReview from './FreelancerReview';

const FreelancerReviewList = (props) => {
  const reviews = props.reviews.map((review, index) => {
    return (
      <li key={index}>
        <FreelancerReview review={review}/>
      </li>
    )
  })
}
