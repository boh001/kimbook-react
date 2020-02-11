import React from "react";
import HomePresenter from "../Home/HomePresenter";

export default class extends React.Component {
  componentWillMount() {
    fetch("/logout", {
      method: "post"
    });
  }
  render() {
    const login = false;
    return (
      <>
        <HomePresenter login={login} />
      </>
    );
  }
}
