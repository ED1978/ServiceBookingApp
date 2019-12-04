import React from 'react';
import Job from './Job'

const JobsList = (props) => {
  if(props.jobs.length === 0 ){
    return (<p>Loading....</p>)
  }

  const jobs = props.jobs.map((job, index) => {
    return(
      <li key={index} className="user-object">
      <Job job={job} />
      </li>
    )
  })

  return(
    <div>
      <h1 className="page-title">Live Jobs</h1>
      <ul>
        {jobs}
      </ul>
    </div>
  )
}

export default JobsList;
