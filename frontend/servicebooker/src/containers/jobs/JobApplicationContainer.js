import React, {Component} from 'react';
import Request from '../../helpers/request';
import TestApp from '../../components/jobs/TestApp';

class JobApplicationContainer extends Component {
  constructor(props) {
    super(props);
    this.handleAppPost = this.handleAppPost.bind(this);
  }

  handleAppPost(application) {
    const request = new Request();
    const url = "/api/jobs/" + this.props.job.id + "/applicants";
    request.post(this.props.url, application).then(() => {
      window.location = '/jobs'
    })
  }

  render() {
    return <TestApp handleAppPost = {this.handleAppPost} url={this.props.url} job_url={this.props.job_url} freelancers={this.props.freelancers}/>
  }
}

export default JobApplicationContainer;
