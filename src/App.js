import React, { Component } from 'react';
import { Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { PersistGate } from 'redux-persist/integration/react';
import Home from './components/Home.js';
import Tenant from './components/Tenant.js';
import BrokerList from './components/BrokerList.js';
import BrokerProfile from './components/BrokerProfile.js';
import AddTenant from './components/AddTenant.js';
import Signin1 from './components/Signin1.js';
import storeReducer from './reducers/storeReducer';
import history from './history';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import logo from './logo.png';
import './App.css';

const persistConfig = {
  key: 'root',
  storage,
}

const styles = {
  bar: {
    flexGrow: 1,
    background: "black",
  },
  text: {
    color: "white",
  }
};

const persistedReducer = persistReducer(persistConfig, storeReducer);

let store = createStore(persistedReducer);
let persistor = persistStore(store);

class App extends Component {
  
  render() {
    const { classes } = this.props
    return (
      <div>
      <div className={classes.bar}>
        <AppBar position="static" color="primary" className={classes.bar}>
          <Toolbar>
            <Typography variant="title" color="default" className={classes.text}>
              <img src={logo} className="App-logo" alt="logo" />&nbsp;
              HectareX
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
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
              <Route path="/tenant" component={Tenant} />
            </div>
            </Router>
          </PersistGate>
        </Provider>
      </div>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(App)
