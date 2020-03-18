import React from "react";
import ProfilePresenter from "./ProfilePresenter";
import { apiMyContent } from "api";

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      myContents: [],
      myFriends: []
    };
  }

  async componentDidMount() {
    try {
      const {
        data: { myContents, myFriends }
      } = await apiMyContent();
      this.setState({ myContents, myFriends: myFriends.friends });
    } catch (error) {
      console.log(error);
    }
  }
  render() {
    const { myContents, myFriends } = this.state;

    return (
      <>
        <ProfilePresenter myContents={myContents} myFriends={myFriends} />
      </>
    );
  }
}
