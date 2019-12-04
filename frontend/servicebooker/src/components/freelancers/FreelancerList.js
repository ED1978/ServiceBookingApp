import React from 'react';
import Freelancer from './Freelancer';
import '../../style.css';

const FreelancerList = (props) => {
  if (props.freelancers.length === 0){
    return (<p>Loading....</p>)
  }

  const freelancers = props.freelancers.map((freelancer, index) => {
    return(
      <li key={index} className="user-object">
        <Freelancer freelancer={freelancer} />
      </li>
    )
  })

  return(
    <div className="list-container">
      <h1 className="page-title">Available Freelancers</h1>
      <ul>
        {freelancers}
      </ul>
    </div>
  )
}

export default FreelancerList;
