import React from "react";
import HomePresenter from "./HomePresenter";
import { Home } from "store";
import { loginChecker } from "./api";
import { useSetTest, useUser } from "../../store";
export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: { login: false },
      contents: []
    };
  }

  async componentDidMount() {
    console.log("hi");

    try {
      const {
        data: { user, contents }
      } = await loginChecker();
      this.setState({ user, contents });
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    const { user, contents, like } = this.state;
    console.log(user);

    return (
      <Home user={user} atest={user} contents={contents}>
        <HomePresenter />
      </Home>
    );
  }
}
