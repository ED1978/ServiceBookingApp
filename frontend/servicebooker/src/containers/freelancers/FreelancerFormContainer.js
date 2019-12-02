import React, {Component} from 'react';
import Request from '../../helpers/request.js';
import FreelancerForm from '../../components/freelancers/FreelancerForm';

class FreelancerFormContainer extends Component {
  constructor(props){
    super(props);
    this.handelFreelancerPost = this.handelFreelancerPost.bind(this);
  }

  handelFreelancerPost(freelancer){
    const request = new Request();
    request.post('/api/freelancers', freelancer)
    .then(() => {
      window.location = '/freelancers'
    })
  }

  render(){
    return(
      <FreelancerForm handlePost={this.handelFreelancerPost}/>
    )
  }

}

export default FreelancerFormContainer;
