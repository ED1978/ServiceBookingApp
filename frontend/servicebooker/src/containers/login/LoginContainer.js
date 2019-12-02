import React, {Component, Fragment} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import LoginForm from '../../components/login/LoginForm';

class LoginContainer extends Component{
  constructor(props){
    super(props);
    this.handleLogin = this.handleLogin.bind(this);
    this.findUserFromEmail = this.findUserFromEmail.bind(this);
  }

  handleLogin(login){
    let foundUser = this.findUserFromEmail(login);
    if(foundUser !== null){
      if (foundUser.password !== login.enteredPassword){
        console.log("Incorrect Password")
      } else if (foundUser.password === login.enteredPassword){
        if(foundUser.userType === "freelancer"){
          window.location = '/freelancers/' + foundUser.id
        } else if(foundUser.userType === "customer"){
          window.location = '/customers/' + foundUser.id
        }
     }
   } else {
     console.log("incorrect email")
   }
  }

  findUserFromEmail(login){
    let freelancer;
    let customer;
    let user = null;
    for (freelancer of this.props.freelancers){
      if (freelancer.email === login.enteredEmail){
        user = freelancer;
      }
    }
    for (customer of this.props.customers){
      if(customer.email === login.enteredEmail){
        user = customer;
      }
    }
    return user;
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
