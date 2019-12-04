import React, {Fragment} from 'react';

const Review = (props) => {
  const url = "/reviews/" + props.review.id;

  return (
    <Fragment>
      <a href={url}>{props.review.rating}</a>
    </Fragment>
  )
}

export default Review;
