import React from 'react';
import Review from './Review';

const ReviewDetail = (props) => {
  if (!props.review) {
    return "Loading..."
  }

  return (
    <div>
      <p>Rating: {props.review.rating}</p>
      <p>Rating: {props.review.date}</p>
      <p>Rating: {props.review.description}</p>
    </div>
  )
}

export default ReviewDetail;
