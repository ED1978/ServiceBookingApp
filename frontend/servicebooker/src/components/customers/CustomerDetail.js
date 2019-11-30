import React from 'react';
import Customer from './Customer';

const CustomerDetail = (props) => {
  if(!props.customer) {
    return "Loading..."
  }

  return (
    <div>
      <Customer customer={props.customer}/>
    </div>
  )
}

export default CustomerDetail;
