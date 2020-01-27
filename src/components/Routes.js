import React from "react";
import { Route, Switch } from "react-router-dom";
import { Home, Signup } from "../routes/";
import SingleMovie from "../routes/SingleMovie";

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/movies/:movieId" component={SingleMovie} />
    <Route exact path="/signup" component={Signup} />
  </Switch>
);

export default Routes;
