import AuthPresenter from "./AuthPresenter";
import React from "react";

class AuthContainer extends React.Component {
  state = {
    verify: ""
  };
  componentWillMount() {
    const {
      location: { search }
    } = this.props;
    fetch("/auth", {
      method: "post",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ key: search.split("=")[1] })
    })
      .then(res => res.json())
      .then(myJson => this.setState({ verify: myJson.verify }))
      .catch(error => console.log(error));
  }
  render() {
    const { verify } = this.state;
    return <AuthPresenter verify={verify} />;
  }
}
export default AuthContainer;
