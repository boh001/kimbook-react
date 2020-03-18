import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from "react-router-dom";
import Home from "Routes/Home";
import Me from "Routes/Me";
import Search from "Routes/Search";
import Join from "Routes/Join";
import Auth from "Routes/Auth";
import Profile from "Routes/Profile";
import { loginChecker } from "api";
import { Main } from "store";

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: { login: false },
      contents: [],
      friends: []
    };
  }
  async componentDidMount() {
    try {
      const {
        data: { user, contents, friends }
      } = await loginChecker();
      this.setState({ user, contents, friends });
    } catch (error) {
      console.log(error);
    }
  }
  render() {
    const { user, contents, friends } = this.state;
    localStorage.setItem("user", JSON.stringify(user));
    return (
      <Router>
        <>
          <Main initUser={friends} initContents={contents}>
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/me" exact component={Me} />
              <Route path="/search" exact component={Search} />
              <Route path="/join" exact component={Join} />
              <Route path="/profile/:id" exact component={Profile} />
              <Route path="/auth" exact component={Auth} />
              <Redirect from="*" to="/" />
            </Switch>
          </Main>
        </>
      </Router>
    );
  }
}
