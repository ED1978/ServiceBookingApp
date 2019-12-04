import React from 'react';
import Review from './Review';

const ReviewList = (props) => {
  if (props.reviews.length === 0) {
    return "Loading..."
  }

  const reviews = props.reviews.map((review, index) => {
    debugger;
    return (
      <li key={index}>
        <Review review={review}/>
      </li>
    )
  })

  return (
    <div>
      {reviews}
    </div>
  )
}

export default ReviewList;
