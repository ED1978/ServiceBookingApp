import React from 'react';
import Freelancer from './Freelancer';

const FreelancerDetail = (props) => {
  if (!props.distillery){
    return "Loading...."
  }

  return(
    <div className="component">
      <Freelancer freelancer={this.props.freelancer} />
      <p>Address: {this.props.freelancer.address}</p>
      <p>Email:: {this.props.freelancer.email}</p>
      <p>Tel:: {this.props.freelancer.tellNo}</p>
      <p>Location: {this.props.freelancer.location}</p>
      <p>Rating: {this.props.freelancer.rating}</p>
      <p>Category: {this.props.freelancer.category}</p>
    </div>
  )
}

export default FreelancerDetail;
