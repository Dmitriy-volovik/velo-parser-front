import * as React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import MainPageBody from './components/main-page-body'
import './App.css';
import PrivateRoute from './components/private-route';
import Dashboard from './components/dashboard';
import SignIn from './components/sign-in';

function App() {
  return (
    // <div className="App">
    //   <MainPageBody />
    // </div>
    <BrowserRouter>
      <Switch>
        {/* <Route component={SignInSide} path="/" exact/> */}
        <Route component={MainPageBody} path="/" exact/>
        <Route component={SignIn} path="/sign-in" exact/>
        {/* <Route component={Dashboard} path="/dashboard" /> */}
        <PrivateRoute component={Dashboard} path="/dashboard" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
