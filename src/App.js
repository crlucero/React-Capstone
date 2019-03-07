import React, { Component } from 'react';
import './App.css';
import Nav from './components/Nav';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './components/Home';
import Upcoming from './components/Upcoming';
import Cart from './components/Cart';
import Wanted from './components/Wanted';
import Stock from './components/Stock';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <BrowserRouter>
          <div>
            <Route exact path="/" component={Home} />
            <Route path="/upcoming" component={Upcoming} />
            <Route path="/cart" component={Cart} />
            <Route path="/wanted" component={Wanted} />
            <Route path="/stock" component={Stock} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
