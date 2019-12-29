import React, { Fragment } from 'react';
import logo from '../assets/rocket.png'
import animal from '../assets/animal.png'
import number1 from '../assets/number1.png'
import number2 from '../assets/number2.png'
import number3 from '../assets/number3.png'
import './HomePage.css';

function HomePage() {
  return (
    <Fragment>
      <div class="card home-card bg-dark border-warning">
        <img src={logo} class="card-img" alt="image rocket" />
        <div class="card-img-overlay">
          <p class="card-title">Welcome on Chat App !</p>
          <p class="card-text">Chat with your <b>Friends</b>, <b>Family</b> or <b>Coworker</b> in a fiew clicks. </p>
        </div>
      </div>
      <div class="card little-card">
        <img src={number1}  class="card-img-top" alt="number1" />
        <div class="card-body">
          <p class="card-text">Sign In</p>
        </div>
      </div>
      <div class="card little-card">
        <img src={number2}  class="card-img-top" alt="number2" />
        <div class="card-body">
          <p class="card-text">Chat with your Friends, Familiy and Coworkers</p>
        </div>
      </div>
      <div class="card little-card">
        <img src={number3} class="card-img-top" alt="number3" />
        <div class="card-body">
          <p class="card-text">Enjoy!</p>
        </div>
      </div>
    </Fragment>
  );
}

export default HomePage;