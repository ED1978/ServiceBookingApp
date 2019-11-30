import React from 'react';
import Freelancer from './Freelancer';

const FreelancerDetail = (props) => {
  if (!props.freelancer){
    return "loading....."
  }

  return(
    <div className="component">
      <Freelancer freelancer={props.freelancer} />
      <p>Address: {props.Freelancer.address}</p>
      <p>Email:: {props.Freelancer.email}</p>
      <p>Tel:: {props.Freelancer.tellNo}</p>
      <p>Location: {props.Freelancer.location}</p>
      <p>Rating: {props.Freelancer.rating}</p>
      <p>Category: {props.Freelancer.category}</p>
    </div>
  )
}

export default FreelancerDetail;
