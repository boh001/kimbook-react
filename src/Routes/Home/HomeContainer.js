import React from "react";
import HomePresenter from "./HomePresenter";
export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: 0
    };
  }

  componentDidMount() {
    fetch("/test")
      .then(res => res.json())
      .then(myJson => {
        console.log(myJson);
        return this.setState({ users: myJson.body });
      });
  }
  render() {
    const { users } = this.state;
    return <HomePresenter users={users} />;
  }
}
