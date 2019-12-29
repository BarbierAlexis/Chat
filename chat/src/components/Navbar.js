import React, { Fragment } from 'react';
import logo from '../assets/pineapple.png'
import './Navbar.css';

function Navbar() {
  return (
    <Fragment>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <img className='logo' src={logo} />
        <a class="navbar-brand" href="#">CHAT APP</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link" href="#">Log In</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Sign In</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Log Out</a>
            </li>
          </ul>
        </div>
      </nav>
    </Fragment>
  );
}

export default Navbar;