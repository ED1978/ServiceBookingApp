import React, {Component , Fragment} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import FreelancerList from '../../components/freelancers/FreelancerList';
import FreelancerDetail from '../../components/freelancers/FreelancerDetail';
import Request from '../../helpers/request.js'
import FreelancerFormContainer from './FreelancerFormContainer';
import FreelancerEditFormContainer from './FreelancerEditFormContainer';

class FreelancerContainer extends Component{
  constructor(props){
    super(props);
    this.findFreelancerById = this.findFreelancerById.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  findFreelancerById(id){
    const freelancer = this.props.freelancers.find((freelancer) => {
      return freelancer.id === parseInt(id);
    });
    return freelancer;
  }

  handleDelete(id){
    const request = new Request();
    const url = '/api/freelancers' + id;
    request.delete(url)
    .then(() => {
      window.location = '/freelancers';
    });
  }

  render(){
    return(
      <Router>
        <Fragment>
          <Switch>

          <Route exact path="/freelancers" render={(props) => {
            return <FreelancerList freelancers={this.props.freelancers} />
          }} />

          <Route exact path='/freelancers/new' render={(props) => {
            return <FreelancerFormContainer />
          }} />

          <Route exact path="/freelancers/edit/id:" render={(props) => {
            const id = props.match.params;
            const freelancer = this.findFreelancerById(id);
            return <FreelancerEditFormContainer freelancer={freelancer} />
          }} />

          <Route exact path="/freelancers/:id" render={(props) => {
            const id = props.match.params.id;
            const freelancer = this.findFreelancerById(id);
            return <FreelancerDetail freelancer={freelancer} onDelete={this.handleDelete} jobs={this.props.jobs} />
          }} />

          </Switch>
        </Fragment>
      </Router>
    )
  }
}

export default FreelancerContainer;
