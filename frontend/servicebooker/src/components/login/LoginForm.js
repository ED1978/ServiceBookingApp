import React from 'react';

const LoginForm = (props) => {

  return (
    <div>
      <form>
        <input type="text" placeholder="Email" name="email"/>
        <input type="text"  placeholder="Password" name="password"/>
        <button type="submit">Login</button>
      </form>
    </div>
  )

}
 export default LoginForm;
