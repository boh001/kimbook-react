import React from "react";
import HomePresenter from "./HomePresenter";

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {}
    };
  }

  componentDidMount() {
    fetch("/test")
      .then(res => res.json())
      .then(myJson => this.setState({ user: myJson.user }));
    console.log(1);
  }
  render() {
    const {
      user: { login, nickname, avatarUrl }
    } = this.state;
    return (
      <>
        <HomePresenter
          login={login}
          nickname={nickname}
          avatarUrl={avatarUrl}
        />
      </>
    );
  }
}
