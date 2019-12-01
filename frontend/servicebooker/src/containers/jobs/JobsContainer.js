import React, {Component, Fragment} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import JobsList from '../../components/jobs/JobsList';

class JobsContainer extends Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <Router>
        <Fragment>
          <Switch>

          <Route exact path="/jobs" render={(props) => {
            return <JobsList jobs={this.props.jobs} />
          }} />

          </Switch>
        </Fragment>
      </Router>
    )
  }
}

export default JobsContainer;
