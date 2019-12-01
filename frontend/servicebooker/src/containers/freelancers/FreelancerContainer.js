import React, {Component , Fragment} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import FreelancerList from '../../components/freelancers/FreelancerList';
import FreelancerDetail from '../../components/freelancers/FreelancerDetail';

class FreelancerContainer extends Component{
  constructor(props){
    super(props);
    this.findFreelancerById = this.findFreelancerById.bind(this);
  }

  findFreelancerById(id){
    const freelancer = this.props.freelancers.find((freelancer) => {
      return freelancer.id === parseInt(id);
    });
    return freelancer;
  }

  render(){
    return(
      <Router>
        <Fragment>
          <Switch>

          <Route exact path="/freelancers" render={(props) => {
            return <FreelancerList freelancers={this.props.freelancers} />
          }} />

          <Route exact path="/freelancers/:id" render={(props) => {
            const id = props.match.params.id;
            const freelancer = this.findFreelancerById(id);
            return <FreelancerDetail freelancer={freelancer} />
          }} />

          </Switch>
        </Fragment>
      </Router>
    )
  }
}

export default FreelancerContainer;
