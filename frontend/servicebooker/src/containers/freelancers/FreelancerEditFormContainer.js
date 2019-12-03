import React, {Component} from 'react';
import Request from '../../helpers/request.js';
import FreelancerEditForm from '../../components/freelancers/FreelancerEditForm';

class FreelancerEditFormContainer extends Component {
  constructor(props){
    super(props);
    this.handleFreelancerUpdate = this.handleFreelancerUpdate.bind(this);
  }

  handleFreelancerUpdate(freelancer){
    const request = new Request();
    request.patch('/api/freelancers/' + this.props.freelancer.id, freelancer)
    .then(() => {
      window.location = '/freelancers/' + this.props.freelancer.id
    })
  }
  render(){
    return(
      <div>
        <FreelancerEditForm freelancer={this.props.freelancer} handleUpdate={this.handleFreelancerUpdate}/>
      </div>
    )
  }

}

export default FreelancerEditFormContainer;
