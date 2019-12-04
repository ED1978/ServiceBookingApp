import React from 'react';
import Job from './Job';
import {Link} from 'react-router-dom';

const JobDetails = (props) => {
  console.log(props)

  if (!props.job){
    return "Loading....."
  }

  const editUrl ='/jobs/edit/' + props.job.id;

  return(
    <div>
      <p>Title: {props.job.title}</p>
      <p>Location: {props.job.location}</p>
      <p>Description: {props.job.description}</p>
      <p>Hourly Rate: £{props.job.price}/hr</p>
      <p>Estimated Duration: {props.job.duration} Hours</p>
      <button><a href='/jobs'>Go Back</a></button>
      <Link to={editUrl}><button type="button">Apply for Jobs</button></Link>
    </div>
  )
}

export default JobDetails;
