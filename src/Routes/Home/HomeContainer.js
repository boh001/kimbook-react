import React from "react";
import HomePresenter from "./HomePresenter";
export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      login: false
    };
  }

  componentDidMount() {
    fetch("/test")
      .then(res => res.json())
      .then(myJson => {
        console.log(myJson);
        return this.setState({ login: myJson.body });
      });
  }
  render() {
    const { login } = this.state;
    return <HomePresenter login={login} />;
  }
}
