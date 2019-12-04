import React, {Component, Fragment} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import JobsList from '../../components/jobs/JobsList';
import JobDetails from '../../components/jobs/JobDetails';

import JobApplicationContainer from './JobApplicationContainer';

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
            const url = '/freelancers/' + id + '/application';
            const job_url = '/jobs/' + id + '/applicants';
            return <JobDetails job={job} new_application={url} post_url={job_url}/>
          }} />

          <Route exact path="/jobs/:id/applicants" render={(props) =>{
            const id = props.match.params.id;
            const job = this.findJobById(id);
            const url = "/api/jobs/" + id + "/applicants";
            const job_url = '/jobs/' + id;
            return <JobApplicationContainer url={url} job={job} job_url={job_url} freelancers={this.props.freelancers}/>
          }}/>

          </Switch>
        </Fragment>
      </Router>
    )
  }
}

export default JobsContainer;
