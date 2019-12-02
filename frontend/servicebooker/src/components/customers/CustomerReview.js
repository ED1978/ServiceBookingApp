import React, {Fragment} from 'react';

const CustomerReview = (props) => {
  if (!props.review) {
    return 'Loading...'
  }

  return (
    <Fragment>
      <p>{props.review.rating}</p>
    </Fragment>
  )
}

export default CustomerReview;
