import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Customer from './Customer';
import CustomerJobList from './CustomerJobList';
import Request from '../../helpers/request';
import CustomerReviewList from './CustomerReviewList';
import CustomerFormContainer from '../../containers/customers/CustomerFormContainer';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

class CustomerDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      customerJobs: null,
      customerReviews: null
    }
  }


  // componentDidUpdate() {
  //   if (!this.state.customerJobs) {
  //     const request = new Request();
  //     const jobs_url = '/api/jobs/customers/' + this.props.customer.id;
  //
  //     request.get(jobs_url).then((jobs) => {
  //
  //       this.setState({
  //         customerJobs: jobs
  //       })
  //     })
  //   }
  //   if (!this.state.customerReviews) {
  //     const request = new Request();
  //     const reviews_url = '/api/reviews/customers/' + this.props.customer.id;
  //
  //     request.get(reviews_url).then((reviews) => {
  //
  //       this.setState({
  //         customerJobs: reviews
  //       })
  //     })
  //   }
  // }

  componentDidUpdate(){
    const request = new Request();
    const jobs_url = '/api/jobs/customers/' + this.props.customer.id;
    const reviews_url = '/api/reviews/customers/' + this.props.customer.id;
    const promise1 = request.get(jobs_url);
    const promise2 = request.get(reviews_url);
    const promises = [promise1, promise2];

    Promise.all(promises).then((data) => {
      this.setState({
        customerJobs: data[0],
        customerReviews: data[1]
      })
    })
  }

  render() {

    if (!this.props.customer || !this.state.customerJobs || !this.state.customerReviews) return "Loading...";

    return (
      <div>
      <p>Name: {this.props.customer.name}</p>
      <p>Address: {this.props.customer.address}</p>
      <p>E-mail: {this.props.customer.email}</p>
      <p>Number: {this.props.customer.tellNo}</p>
      <p>City: {this.props.customer.location}</p>
      <p>Available job opportunities:</p>
      <CustomerJobList jobs={this.state.customerJobs}/>
      <p>Rating:</p>
      <CustomerReviewList reviews={this.state.customerReviews}/>
      <button><a href={this.props.newjob_url}>New Job</a></button>
      <button><a href="/customers">Go Back</a></button>
      </div>
    )
  }
}


export default CustomerDetail;
