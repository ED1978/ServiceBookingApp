import React from 'react';
import './NavBar.css'


const NavBar = (props) => {
  return(
    <header>
      <div className="title">
        <h2>Find A Freelancer</h2>
      </div>
      <div className="nav-links">
        <ul>
          <li className="nav-link">
            <a href='/customers'>Customers</a>
          </li>
          <li className="nav-link">
            <a href="/customers/new">Become a Customer</a>
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
      </div>
    </header>
  )
}

export default NavBar;
