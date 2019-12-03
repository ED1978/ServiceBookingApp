import React, {Component, Fragment} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import JobsList from '../../components/jobs/JobsList';
import JobDetails from '../../components/jobs/JobDetails';
import JobFormContainer from './JobFormContainer';

class JobsContainer extends Component{
  constructor(props){
    super(props);
    this.findJobById = this.findJobById.bind(this);
  }

  findJobById(id){
    const job = this.props.jobs.find((job) => {
      return job.id === parseInt(id);
    });
    return job;
  }

  render(){
    return(
      <Router>
        <Fragment>
          <Switch>

          <Route exact path="/jobs" render={(props) => {
            return <JobsList jobs={this.props.jobs} />
          }} />

          <Route exact path="/jobs/:id" render={(props) => {
            const id = props.match.params.id;
            const job = this.findJobById(id);
            return <JobDetails job={job} />
          }} />

          <Route exact path="/jobs/edit/:id" render={(props) => {
            const id = props.match.params.id;
            const job = this.findJobById(id);
            return <JobFormContainer job={job} freelancers={this.props.freelancers}/>
          }} />

          </Switch>
        </Fragment>
      </Router>
    )
  }
}

export default JobsContainer;
