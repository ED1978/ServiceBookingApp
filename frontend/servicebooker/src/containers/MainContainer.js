import React, {Component, Fragment} from 'react';
import Request from '../helpers/request';
import FreelancerContainer from './freelancers/FreelancerContainer';
import NavBar from '../NavBar';
import CustomerContainer from './customers/CustomerContainer';
import JobsContainer from './jobs/JobsContainer';
import LoginContainer from './login/LoginContainer';
import ReviewContainer from './reviews/ReviewContainer';

class MainContainer extends Component{
  constructor(props){
    super(props);
    this.state = {
      customers: [],
      freelancers: [],
      reviews: [],
      jobs: []
    }
  }

  componentDidMount(){
    const request = new Request();
    const promise1 = request.get('/api/customers');
    const promise2 = request.get('/api/freelancers');
    const promise3 = request.get('/api/jobs');
    const promise4 = request.get('/api/reviews');
    const promises = [promise1, promise2, promise3, promise4];

    Promise.all(promises).then((data) => {
      this.setState({
        customers: data[0]._embedded.customers,
        freelancers: data[1]._embedded.freelancers,
        jobs: data[2]._embedded.jobs,
        reviews: data[3]._embedded.reviews,
      })
    })
  }

  render(){
    return(
      <Fragment>
        <NavBar />
        <FreelancerContainer freelancers={this.state.freelancers} jobs={this.state.jobs} reviews={this.state.reviews}/>
        <CustomerContainer customers={this.state.customers}/>
        <JobsContainer jobs={this.state.jobs} freelancers={this.state.freelancers}/>
        <ReviewContainer reviews={this.state.reviews}/>
        <LoginContainer freelancers={this.state.freelancers} customers={this.state.customers}/>
      </Fragment>
    )
  }
}

export default MainContainer;
