import React, {Component, Fragment} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import CustomerList from '../../components/customers/CustomerList';
import CustomerDetail from '../../components/customers/CustomerDetail';
import Request from '../../helpers/request';
import CustomerJobList from '../../components/customers/CustomerJobList';
import CustomerReviewList from '../../components/customers/CustomerReviewList';
import CustomerFormContainer from './CustomerFormContainer';


class CustomerContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      customerJob: []
    }
    this.findCustomerById = this.findCustomerById.bind(this);
    this.findJobById = this.findJobById.bind(this);
  }

    findCustomerById(id) {
      const customer = this.props.customers.find((customer) => {
        return customer.id === parseInt(id)
      })
      return customer;
    }

    findJobById(id) {
      const job = this.props.jobs.find((job) => {
        return job.id === parseInt(id)
      })
      return job;
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
              const url = "/customers/" + id + "/newjob";
              return <CustomerDetail customer={customer} newjob_url={url}/>
            }}/>
            <Route exact path="/customers/:id/jobs" render={(props) => {
              const id = props.match.params.id;
              return <CustomerJobList jobs={this.state.jobs}/>
            }}/>
            <Route exact path="/customers/:id/reviews" render={(props) => {
              const id = props.match.params.id;
              return <CustomerReviewList reviews={this.state.reviews}/>
            }}/>
            <Route exact path="/customers/:id/newjob" render={(props) =>{
              const id = props.match.params.id;
              const customer = this.findCustomerById(id);
              const url = "/customers/" + id;
              return <CustomerFormContainer customer={customer} url={url}/>
            }}/>
            </Switch>
          </Fragment>
        </Router>
      )
    }

}

export default CustomerContainer;
