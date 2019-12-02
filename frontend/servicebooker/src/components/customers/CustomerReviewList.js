import React from 'react';
import CustomerReview from './CustomerReview';

const CustomerReviewList = (props) => {
  const reviews = props.reviews.map((review, index) => {
    return (
      <li key={index}>
        <CustomerReview review={review}/>
      </li>
    )
  })

  return (
    <ul>
      {reviews}
    </ul>
  )
}

export default CustomerReviewList;
