import React from "react";
import HomePresenter from "./HomePresenter";
import { Home } from "store";
import { loginChecker } from "./api";
export default class extends React.Component {
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
    console.log(user);

    return (
      // <Store.Provider value={this.state}>
      //   <HomePresenter />
      // </Store.Provider>
      <Home user={user} contents={contents}>
        <HomePresenter />
      </Home>
    );
  }
}
