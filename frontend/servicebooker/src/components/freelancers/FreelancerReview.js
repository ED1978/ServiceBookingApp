import React, {Fragment} from 'react';

const FreelancerReview = (props) => {
  if(!props.review) {
    return "Loading..."
  }

  return (
    <Fragment>
      <p>{props.review.rating}</p>
    </Fragment>
  )
}
