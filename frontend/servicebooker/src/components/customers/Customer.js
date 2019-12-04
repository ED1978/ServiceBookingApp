import React, {Fragment} from 'react';
import '../../style.css';
import {Link} from 'react-router-dom';

const Customer = (props) => {
  if(!props.customer) {
    return "Loading..."
  }

  const url = "/customers/" + props.customer.id;

  return (
    <Fragment>
      <a href={url}>{props.customer.name}</a>
    </Fragment>
  )
}

export default Customer;
