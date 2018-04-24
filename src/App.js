import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './components/Home.js';
import BrokerList from './components/BrokerList.js';
import BrokerProfile from './components/BrokerProfile.js';
import AddTenant from './components/AddTenant.js';
import logo from './logo.png';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to HectareX !</h1>
        </header>
        <br />
        <BrowserRouter>
        <div>
          <Route exact path="/" component={Home} />
          <Route path="/brokerlist" component={BrokerList} />
          <Route path="/brokerprofile/:id" exact component={BrokerProfile} />
          <Route path="/addtenant" component={AddTenant} />
        </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
