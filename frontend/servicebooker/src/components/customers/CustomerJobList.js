import React from 'react';
import CustomerJob from './CustomerJob';

const CustomerJobList = (props) => {

  const jobs = props.jobs.map((job, index) => {
    return (
      <li key={index}>
        <CustomerJob job={job}/>
      </li>
    )
  })

  return (
    <ul>
      {jobs}
    </ul>
  )
}

export default CustomerJobList;
