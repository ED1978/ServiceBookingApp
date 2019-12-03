import React, {Component} from 'react';
import Request from '../../helpers/request.js';
import CustomerCreateForm from '../../components/customers/CustomerCreateForm';

class CustomerCreateFormContainer extends Component{
  constructor(props){
    super(props);
    this.handleCustomerPost = this.handleCustomerPost.bind(this);
  }

  handleCustomerPost(customer){
    const request = new Request();
    request.post('/api/customers', customer)
    .then(() => {
      window.location = '/login'
    })
  }

  render(){
    return(
      <CustomerCreateForm handlePost={this.handleCustomerPost}/>
    )
  }

}
export default CustomerCreateFormContainer;
