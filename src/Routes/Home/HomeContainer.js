import React from "react";
import HomePresenter from "./HomePresenter";
import { Home } from "store";
import { loginChecker } from "./api";
export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: { login: false }
    };
  }

  async componentDidMount() {
    try {
      const {
        data: { user }
      } = await loginChecker();
      this.setState({ user });
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    const { user } = this.state;
    return (
      <Home user={user}>
        <HomePresenter />
      </Home>
    );
  }
}
