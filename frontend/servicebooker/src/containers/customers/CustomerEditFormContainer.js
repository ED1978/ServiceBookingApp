import React, {Component} from 'react';
import Request from '../../helpers/request.js';

class CustomerEditFormContainer extends Component {
  constructor(props){
    super(props);
    this.handleCustomerUpdate = this.handleCustomerUpdate.bind(this);
  }

  handleCustomerUpdate(customer){
    const request = new Request();
    request.patch('/api/customers/' + this.props.customer.id, customer)
    .then(() => {
      window.location = '/customers/' + this.props.customer.id
    })
  }

  render(){
    return(
      <div>
        <p>CustomerEditFormContainer</p>
      </div>
    )
  }

}

export default CustomerEditFormContainer
