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
    let foundUser = null;
    for (freelancer of this.props.freelancers){
      if (freelancer.email === login.enteredEmail){
        foundUser = freelancer;
      }
    }
    if(foundUser !== null){
      if (foundUser.password !== login.enteredPassword){
        console.log("Incorrect Password")
      } else if (foundUser.password === login.enteredPassword){
      window.location = '/freelancers/' + foundUser.id
     }
   } else {
     console.log("incorrect email")
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
