import React, {Component} from 'react';
import Request from '../helpers/request';
// import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';


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
      <div>
        <p>MainContainer23</p>
      </div>
    )
  }
}

export default MainContainer;
