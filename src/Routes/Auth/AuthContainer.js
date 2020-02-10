import AuthPresenter from "./AuthPresenter";
import React from "react";

class AuthContainer extends React.Component {
  state = {
    verify: "",
    username: ""
  };
  componentWillMount() {
    const {
      location: { search }
    } = this.props;
    const data = fetch("/auth", {
      method: "post",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ key: search.split("=")[1] })
    })
      .then(res => res.json())
      .then(myJson => myJson)
      .catch(error => console.log(error));
    this.setState({ username: data.username, verify: data.verify });
  }
  render() {
    const { verify, username } = this.state;
    return <AuthPresenter verify={verify} username={username} />;
  }
}
export default AuthContainer;
