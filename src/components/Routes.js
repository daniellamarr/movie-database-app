import React from "react";
import { Route, Switch } from "react-router-dom";
import { Home, Signup } from "../routes/";

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/signup" component={Signup} />
  </Switch>
);

export default Routes;
