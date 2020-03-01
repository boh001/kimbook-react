import MePresenter from "./MePresenter";
import React from "react";
import { loginChecker } from "Components/api";
import { Home } from "store";

class MeContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: { login: false },
      contents: []
    };
  }
  async componentDidMount() {
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
    const { user, contents } = this.state;
    localStorage.setItem("user", JSON.stringify(this.state.user));
    return (
      <Home initUser={user} initContents={contents}>
        <MePresenter />;
      </Home>
    );
  }
}
export default MeContainer;
