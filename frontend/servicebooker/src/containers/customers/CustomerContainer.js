import React, {Component, Fragment} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import CustomerList from '../../components/customers/CustomerList';
import CustomerDetail from '../../components/customers/CustomerDetail';


class CustomerContainer extends Component {

    findCustomerById(id) {
      const customer = this.props.customers.find((customer) => {
        return customer.id === parseInt(id)
      })
      return customer;
    }

    render() {
      return(
        <Router>
          <Fragment>
            <Switch>
            <Route exact path="/customers" render={(props) => {
              return <CustomerList customers={this.props.customers}/>
            }}/>
            <Route exact path="/customers/:id" render={(props) => {
              const id = props.match.params.id;
              const customer = this.findCustomerById(id);
              return <CustomerDetail customer={customer}/>
            }}/>
            </Switch>
          </Fragment>
        </Router>
      )
    }

}

export default CustomerContainer;
