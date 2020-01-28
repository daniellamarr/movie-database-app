import React from "react";
import { Route, Switch } from "react-router-dom";
import { Home, Signup } from "../routes/";
import SingleMovie from "../routes/SingleMovie";
import Login from "../routes/Login";
import NotFound from "../routes/NotFound";

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/movies/:movieId" component={SingleMovie} />
    <Route exact path="/signup" component={Signup} />
    <Route exact path="/login" component={Login} />
    <Route component={NotFound} />
  </Switch>
);

export default Routes;
