import React, {Fragment} from 'react';

const CustomerJob = (props) => {

  if (!props.job) {
    return 'Loading...'
  }

  return (
    <Fragment>
      <p>{props.job.title}</p>
    </Fragment>
  )

}

export default CustomerJob;
