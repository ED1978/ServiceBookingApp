import React from 'react';

const NavBar = (props) => {
  return(
    <header>
      <ul>
        <li>
          <a href='/customers'>Customers</a>
        </li>
        <li className="nav-link">
          <a href="/freelancers">Freelancers</a>
        </li>
        <li className="nav-link">
          <a href="/freelancers/new">Become a Freelancer</a>
        </li>
        <li className="nav-link">
          <a href="/jobs">Jobs</a>
        </li>
        <li className="nav-link">
          <a href="/login">Login</a>
        </li>
      </ul>
    </header>
  )
}

export default NavBar;
