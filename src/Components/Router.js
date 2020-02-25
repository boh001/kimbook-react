import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from "react-router-dom";
import Home from "Routes/Home";
import Join from "Routes/Join";
import Auth from "Routes/Auth";
import Profile from "Routes/Profile";

export default () => (
  <Router>
    <>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/join" exact component={Join} />
        <Route path="/profile/:id" exact component={Profile} />
        <Route path="/auth" exact component={Auth} />
        <Redirect from="*" to="/" />
      </Switch>
    </>
  </Router>
);
