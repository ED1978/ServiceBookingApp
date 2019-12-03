import React, {Component} from 'react';
import Request from '../../helpers/request.js'
import JobApplyForm from '../../components/jobs/JobApplyForm';

class JobFormContainer extends Component{
  constructor(props){
    super(props);
    this.handleApply = this.handleApply.bind(this);
  }

  handleApply(job){
    const request = new Request();
    request.patch('api/jobs/' + this.props.job.id, job).then(() => {
      window.location = '/jobs/' + this.props.job.id
    })
  }

  render(){
    return(
      <JobApplyForm handleApply={this.handleApply} freelancers={this.props.freelancers}/>

    )
  }
}

export default JobFormContainer;
