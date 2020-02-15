import React from "react";
import HomePresenter from "./HomePresenter";
import Store from "store";

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
      contents: []
    };
  }

  componentWillMount() {
    fetch("/", {
      method: "post"
    })
      .then(res => res.json())
      .then(myJson =>
        this.setState({ user: myJson.user, contents: myJson.contents })
      );
  }
  render() {
    return (
      <Store.Provider value={this.state}>
        <HomePresenter />
      </Store.Provider>
    );
  }
}
