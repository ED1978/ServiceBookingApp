import React, {Component, Fragment} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import LoginForm from '../../components/login/LoginForm';

class LoginContainer extends Component{
  constructor(props){
    super(props);
    this.state = {
      enteredEmail: null,
      enteredPassword: null
    }
    this.handleLogin = this.handleLogin.bind(this);
  }

  handleLogin(login){
    this.setState(login)
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
