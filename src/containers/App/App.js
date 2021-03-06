import React, { Component } from 'react';
import { Grid } from '@material-ui/core';
import { Switch, Route } from 'react-router-dom'
import { ThemeProvider } from '@material-ui/core/styles';

import './App.css';
import Login from '../Login/Login'
import Register from '../Register/Register'
import Navbar from './../../elements/Navbar/Navbar'
import Sidebar from './../../elements/Sidebar/Sidebar'
import Dashboard from './../../components/Dashboard/Dashboard'
import Project from '../Project/Project'
import Analysis from './../../components/Analysis/Analysis'
import Supplier from './../Supplier/Supplier'
import PurchaseOrder from './../../components/PurchaseOrder/PurchaseOrder'
import GlobalStore from '../../components/GlobalStore/GlobalStore'
import { theme } from '../../Theme/Theme'

class App extends Component {
  constructor(props) {
    super(props);

    if (localStorage.getItem('expiryTime') > new Date().getTime() / 1000) {
      this.state = {
        isAuthenticated: true
      }
    } else {
      this.state = {
        isAuthenticated: false
      }
    }
  }

  onAuthHandler = () => {
    this.setState({
      isAuthenticated: true
    });
  }

  render() {
    return (
      <ThemeProvider theme={theme}>
        <div className="App">
          <Switch>
            <Route
              exact path="/login"
              component={() => <Login isAuthenticated={this.state.isAuthenticated} onAuth={this.onAuthHandler} />}
            />
            <Route exact path="/register" component={() => <Register isAuthenticated={this.state.isAuthenticated} onRegister={this.onAuthHandler} />} />
            <Route path="/" component={() => (
              <Grid direction="row" container>
                <Grid item xl={2} lg={2} sm={4} xs={0} className="sidebarContainer">
                  <Sidebar />
                </Grid>
                <Grid item xl={10} lg={10} sm={8} xs={12} className="rightsideContainer">
                  <Grid item lg={12} className="navbarContainer">
                    <Navbar />
                  </Grid>
                  <Grid item container className="pageContainer">
                    <Switch>
                      <Route
                        exact path="/"
                        component={() => <Dashboard isAuthenticated={this.state.isAuthenticated} />}
                      />
                      <Route exact path="/projects" component={Project} />
                      <Route exact path="/analysis" component={Analysis} />
                      <Route exact path="/purchaseOrder" component={PurchaseOrder} />
                      <Route exact path="/supplier" component={Supplier} />
                      <Route exact path="/globalStore" component={GlobalStore} />
                    </Switch>
                  </Grid>
                </Grid>
              </Grid>
            )} />
          </Switch>
        </div>
      </ThemeProvider>
    );
  }
}

export default App;
