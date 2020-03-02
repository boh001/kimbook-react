import MePresenter from "./MePresenter";
import React from "react";
import { loginChecker } from "Components/api";
import { Home } from "store";

class MeContainer extends React.Component {
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
      <Home initUser={friends} initContents={contents}>
        <MePresenter />;
      </Home>
    );
  }
}
export default MeContainer;
