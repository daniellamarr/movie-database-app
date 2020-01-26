import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from '../pages/homePage/homePage';
import { Home, Signup } from "../routes/";

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/home" component={HomePage} />
    <Route exact path="/signup" component={Signup} />
  </Switch>
);

export default Routes;
