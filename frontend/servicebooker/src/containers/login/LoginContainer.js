import React, {Component, Fragment} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import LoginForm from '../../components/login/LoginForm';

class LoginContainer extends Component{
  constructor(props){
    super(props);
    this.state = {
      enteredEmail: null,
      enteredPassword: null,
      user: null
    }
    this.handleLogin = this.handleLogin.bind(this);
  }

  handleLogin(login){
    this.setState(login);
    let freelancer;
    let foundUser;
    for (freelancer of this.props.freelancers){
      if (freelancer.email === this.state.enteredEmail){
        console.log(freelancer)
      }
    }
  }

  render(){
    return(
      <Router>
        <Fragment>
          <Switch>

            <Route exact path="/login" render={(props) => {
              return <LoginForm handleLogin={this.handleLogin}/>
            }}/>

          </Switch>
        </Fragment>
      </Router>
    )
  }
}

export default LoginContainer;
