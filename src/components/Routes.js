import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../routes/Home';
import HomePage from '../pages/homePage/homePage';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/home" component={HomePage} />
  </Switch>
);

export default Routes;
