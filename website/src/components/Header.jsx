import React from "react";
import '../styles/Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logoContainer">
        <img
          src="/images/logo.png"
          alt="javaCup Logo"
          className="logo"
        />
        <h1 className="title">Java Cup</h1>
      </div>

      <nav>
        <ul className="navList">
          <li><a href="#home" className="navLink">Home</a></li>
          <li><a href="#mobileapp" className="navLink">Mobile App</a></li>
          <li><a href="#menu" className="navLink">Menu</a></li>
          <li><a href="#contact" className="navLink">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};
export default Header;