import React, { Component } from 'react'
import './Header.css';

export class Header extends Component {
  render() {
    return (
      <div className='App-Header'>
        <div className='navbar'>
                <div className="header">
                    <a href="#default" className="logo">SNKRS.</a>
                    <div className="header-right">
                        <a className="active" href="#home">Home</a>
                        <a href="#contact">Contact</a>
                        <a href="#about">About</a>
                    </div>
                </div>
        </div>
      </div>
    )
  }
}

export default Header;
