import React from 'react';
import Freelancer from './Freelancer';

const FreelancerList = (props) => {
  if (props.freelancers.length === 0){
    return (<p>Loading....</p>)
  }

  const freelancers = props.freelancers.map((freelancer, index) => {
    return(
      <li key={index} className="component-item">
        <Freelancer freelancer={freelancer} />
      </li>
    )
  })

  return(
    <div>
      <h2>Freelancers</h2>
      <ul>
        {freelancers}
      </ul>
    </div>
  )
}

export default FreelancerList;
