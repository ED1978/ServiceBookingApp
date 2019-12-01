import React from 'react';
import Freelancer from './Freelancer';

const FreelancerDetail = (props) => {
  if (!props.freelancer){
    return "Loading...."
  }

  return(
    <div className="component">
      <Freelancer freelancer={props.freelancer} />
      <p>Address: {props.freelancer.address}</p>
      <p>Email:: {props.freelancer.email}</p>
      <p>Tel:: {props.freelancer.tellNo}</p>
      <p>Location: {props.freelancer.location}</p>
      <p>Rating: {props.freelancer.rating}</p>
      <p>Category: {props.freelancer.category}</p>
    </div>
  )
}

export default FreelancerDetail;
