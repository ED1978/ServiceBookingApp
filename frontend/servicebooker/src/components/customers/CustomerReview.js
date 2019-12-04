import React, {Fragment} from 'react';

const CustomerReview = (props) => {
  if (!props.review) {
    return 'Loading...'
  }

  const url = '/reviews/' + props.review.id;

  return (
    <Fragment>
      <a href={url}>{props.review.rating}</a>
    </Fragment>
  )
}

export default CustomerReview;
