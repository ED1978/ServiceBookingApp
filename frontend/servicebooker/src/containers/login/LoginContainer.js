import React, {Component, Fragment} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import LoginForm from '../../components/login/LoginForm';

class LoginContainer extends Component{
  constructor(props){
    super(props);
    this.handleLogin = this.handleLogin.bind(this);
  }

  handleLogin(login){
    let freelancer;
    let foundUser;
    for (freelancer of this.props.freelancers){
      if (freelancer.email === login.enteredEmail){
        foundUser = freelancer
        console.log(foundUser)
      }
    }
    if((foundUser != null) && (foundUser.password === login.enteredPassword)){
      window.location = '/freelancers/' + foundUser.id
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
