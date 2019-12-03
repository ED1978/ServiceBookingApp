import React, {Component} from 'react';
import Request from '../../helpers/request.js';
import CustomerEditForm from '../../components/customers/CustomerEditForm';

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
        <CustomerEditForm customer={this.props.customer} handleUpdate={this.handleCustomerUpdate} />
       </div>
    )
  }

}

export default CustomerEditFormContainer
