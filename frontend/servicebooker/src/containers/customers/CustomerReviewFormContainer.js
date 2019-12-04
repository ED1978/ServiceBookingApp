import React, {Component} from 'react';
import Request from '../../helpers/request';
import CustomerReviewForm from '../../components/customers/CustomerReviewForm';

class CustomerReviewFormContainer extends Component {
  constructor(props) {
    super(props);
    this.handleCustomerPost = this.handleCustomerPost.bind(this);
  }

  handleCustomerPost(rating) {
    const request = new Request();
    const reviews_url = '/api/reviews';
    request.post(reviews_url, rating).then(() => {
      window.location = '/customers/' + this.props.customer.id
    })
  }

  render() {
    return <CustomerReviewForm handleCustomerPost = {this.handleCustomerPost} url={this.props.url}/>
  }
}

export default CustomerReviewFormContainer;
