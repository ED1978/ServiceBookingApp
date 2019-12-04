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
      <h1 className="page-title">Login</h1>
      <div>
        <form className="form" onSubmit={handleLogin}>
          <input type="text" placeholder="Email" name="email"/>
          <input type="text"  placeholder="Password" name="password"/>
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  )

}
 export default LoginForm;
