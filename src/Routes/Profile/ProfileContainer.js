import React from "react";
import ProfilePresenter from "./ProfilePresenter";
import { apiMyContent } from "api";
import queryString from "query-string";

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      myContents: [],
      myFriends: []
    };
  }

  async componentDidMount() {
    const {
      match: {
        params: { id }
      }
    } = this.props;
    console.log(id);

    try {
      const {
        data: { myContents, myFriends }
      } = await apiMyContent(id);
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
