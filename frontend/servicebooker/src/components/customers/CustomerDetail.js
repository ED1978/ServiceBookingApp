import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Customer from './Customer';
import CustomerJobList from './CustomerJobList';
import Request from '../../helpers/request';
import CustomerFormContainer from '../../containers/customers/CustomerFormContainer';

class CustomerDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      customerJobs: null,
      customerReviews: null
    }
    this.averageRating = this.averageRating.bind(this);
    this.numberOfElements = this.numberOfElements.bind(this);
  }

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

  numberOfElements() {
    return this.state.customerReviews.length;
  }

  averageRating() {
    let counter = 0;
    const totalReview = this.numberOfElements();
    for (let i=0; i<totalReview; i++) {
      counter += this.state.customerReviews[i].rating;
    }
    const average = counter / totalReview;
    return average;
  }

  render() {

    if (!this.props.customer || !this.state.customerJobs || !this.state.customerReviews) return "Loading...";

    return (
      <div>
      <p>Name: {this.props.customer.name}</p>
      <p>Address: {this.props.customer.address}</p>
      <p>City: {this.props.customer.location}</p>
      <p>E-mail: {this.props.customer.email}</p>
      <p>Number: {this.props.customer.tellNo}</p>
      <p>Available job opportunities:</p>
      <CustomerJobList jobs={this.state.customerJobs}/>
      <p>Rating: {this.averageRating().toFixed(2)} ({this.numberOfElements()} ratings)</p>
      <button><a href={this.props.newjob_url}>New Job</a></button>
      <button><a href="/customers">Go Back</a></button>
      <button><a href={this.props.newrating_url}>Give me a rating</a></button>
      </div>
    )
  }
}


export default CustomerDetail;
