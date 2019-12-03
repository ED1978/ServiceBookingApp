import React, {Component} from 'react';
import Request from '../../helpers/request';
import CustomerForm from '../../components/customers/CustomerForm';

class CustomerFormContainer extends Component {
  constructor(props) {
    super(props);
    this.handleCustomerPost = this.handleCustomerPost.bind(this);
  }

  handleCustomerPost(job) {
    const request = new Request();
    const jobs_url = '/api/jobs';
    request.post(jobs_url, job).then(() => {
      window.location = '/customers/' + this.props.customer.id
    })
  }

  render() {
    return <CustomerForm handleCustomerPost = {this.handleCustomerPost} url={this.props.url}/>
  }

}

export default CustomerFormContainer;
