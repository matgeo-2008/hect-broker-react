import React, { Component } from 'react';
import { Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { PersistGate } from 'redux-persist/integration/react';
// import reduxThunk from 'redux-thunk';
import Home from './components/Home.js';
import BrokerList from './components/BrokerList.js';
import BrokerProfile from './components/BrokerProfile.js';
import AddTenant from './components/AddTenant.js';
import Signin1 from './components/Signin1.js';
import storeReducer from './reducers/storeReducer';
import history from './history';
import logo from './logo.png';
import './App.css';

// const createStoreWithMiddleware = applyMiddleware()(createStore);
// const store = createStoreWithMiddleware(reducers);
// const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, storeReducer);

let store = createStore(persistedReducer);
let persistor = persistStore(store);

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to HectareX !</h1>
        </header>
        <br />
        <Provider store={store}>
          <PersistGate persistor={persistor}>
            <Router history={history}>
            <div>
              <Route exact path="/" component={Home} />
              <Route path="/brokerlist" component={BrokerList} />
              <Route path="/brokerprofile/:id" exact component={BrokerProfile} />
              <Route path="/addtenant" component={AddTenant} />
              <Route path="/signin" component={Signin1} />
            </div>
            </Router>
          </PersistGate>
        </Provider>
      </div>
    );
  }
}

export default App;
