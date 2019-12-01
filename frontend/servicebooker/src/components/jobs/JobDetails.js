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
    </div>
  )
}

export default JobDetails;
