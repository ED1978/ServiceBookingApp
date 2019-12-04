import React from 'react';
import Freelancer from './Freelancer';
import JobsList from '../jobs/JobsList';
import JobDetails from '../jobs/JobDetails';
import Job from '../jobs/Job';

const FreelancerDetail = (props) => {
  if (!props.freelancer){
    return "Loading...."
  }

  const handleDelete = () => {
    props.onDelete(props.freelancer.id)
  }

  return(
    <div className="component">
      <p>Name: {props.freelancer.name}</p>
      <p>Address: {props.freelancer.address}</p>
      <p>Email: {props.freelancer.email}</p>
      <p>Tel: {props.freelancer.tellNo}</p>
      <p>Location: {props.freelancer.location}</p>
      <p>Rating: {props.freelancer.rating}</p>
      <p>Category: {props.freelancer.category}</p>
      <button onClick={handleDelete}>Delete {props.freelancer.name}</button>
      <button><a href='/freelancers'>Go Back</a></button>
    </div>
  )
}

export default FreelancerDetail;
