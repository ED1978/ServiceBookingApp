import React from 'react';
import CustomerJob from './CustomerJob';

const CustomerJobDetail = (props) => {
  if (!props.job) {
    return "Loading..."
  }

  return (
    <div>
      <p> valami: {props.job.title}</p>
    </div>
  )
}

export default CustomerJobDetail;
