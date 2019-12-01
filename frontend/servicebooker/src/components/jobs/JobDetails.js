import React from 'react';
import Job from './Job';

const JobDetails = (props) => {
  console.log(props)

  if (!props.job){
    return "Loading....."
  }

  return(
    <div>
      <Job job={props.job} />
      <p>Title: {props.job.title}</p>
      <p>Location: {props.job.location}</p>
      <p>Description: {props.job.description}</p>
      <p>Hourly Rate: £{props.job.price}/hr</p>
      <p>Estimated Duration: {props.job.duration} Hours</p>
    </div>
  )
}

export default JobDetails;
