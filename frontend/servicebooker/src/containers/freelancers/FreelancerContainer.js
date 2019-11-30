import React, {Component , Fragment} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import FreelancerList from '../../components/freelancers/FreelancerList';

class FreelancerContainer extends Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <Router>
        <Fragment>
          <Switch>

          <Route exact path="/freelancers" render={(props) => {
            return <FreelancerList freelancers={this.props.freelancers} />
          }}/>

          </Switch>
        </Fragment>
      </Router>
    )
  }
}

export default FreelancerContainer;
