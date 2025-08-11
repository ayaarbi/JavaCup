import React from "react";
import '../styles/Home.css';
import logo from '../logo.png';

export default function Home() {
  return (
    <div className="home-container" id="home">
      <div className="logo-text">
        <img src={logo} alt="JavaCup Logo" className="big-logo" />
        <div className="welcome-text">
          <h1>Welcome to <span>Java Cup</span></h1>
          <p>Your cozy place for fresh brews and sweet treats.</p><br/><br/>
          <div className="special-offer">
            <h2>Today's Special</h2>
            <p>Enjoy our Caramel Latte with a free croissant at 15% off!</p>
          </div>
        </div>
      </div>
    </div>
  );
}