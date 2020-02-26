import React from "react";
import ProfilePresenter from "./ProfilePresenter";
import { apiMyContent } from "Components/api";

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      myContents: []
    };
  }

  async componentDidMount() {
    try {
      const {
        data: { myContents }
      } = await apiMyContent();
      this.setState({ myContents });
    } catch (error) {
      console.log(error);
    }
  }
  render() {
    const { myContents } = this.state;
    console.log(myContents);

    return (
      <>
        <ProfilePresenter myContents={myContents} />
      </>
    );
  }
}
