import React from 'react';

const LoginForm = (props) => {

  function handleLogin(event){
    event.preventDefault();
    const login = {
      enteredEmail: event.target.email.value,
      enteredPassword: event.target.password.value
    }
    props.handleLogin(login);
  }

  return (
    <div>
      <form onSubmit={handleLogin}>
        <input type="text" placeholder="Email" name="email"/>
        <input type="text"  placeholder="Password" name="password"/>
        <button type="submit">Login</button>
      </form>
    </div>
  )

}
 export default LoginForm;
