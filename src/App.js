import React, { Component } from 'react';
import './App.css';
import Nav from './components/Nav';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import Upcoming from './components/Upcoming';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <BrowserRouter>
          <div>
              <Route exact path='/' component={Home} />
              <Route path='/upcoming' component={Upcoming} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
