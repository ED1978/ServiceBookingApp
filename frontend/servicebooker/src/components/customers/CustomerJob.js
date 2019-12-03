import React, {Fragment} from 'react';

const CustomerJob = (props) => {

  if (!props.job) {
    return 'Loading...'
  }

  const url = '/jobs/' + props.job.id;

  return (
    <Fragment>
      <a href={url}>{props.job.title}</a>
    </Fragment>
  )

}

export default CustomerJob;
