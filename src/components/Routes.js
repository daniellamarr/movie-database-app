import React from "react";
import { Route, Switch } from "react-router-dom";
import { Home, Signup, Login } from "../routes";

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/signup" component={Signup} />
    <Route exact path="/login" component={Login} />
  </Switch>
);

export default Routes;
