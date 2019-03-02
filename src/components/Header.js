import React, { Component } from "react";
import "./Header.css";

export class Header extends Component {
  render() {
    return (
      <div className="App-Header">
        <div className="navbar">
          <hr />
          <div className="header">
            <a href="#default" className="logo">
              SNKRS.
            </a>
            <div className="header-right">
              <a className='home' href="#home">Home</a>
              <a className='stock' href="#stock">In Stock</a>
              <a className='upcoming' href="#upcoming">Upcoming</a>
              <a className='login' href="#login">Login</a>
              <a className='cart' href="#cart">Cart</a>
            </div>
          </div>
          <hr />
        </div>
      </div>
    );
  }
}

export default Header;
