import React from "react";
import { apiContents } from "./api";
import Content from "./Content";

class Contents extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contents: []
    };
  }
  async componentDidMount() {
    try {
      const {
        data: { contents }
      } = await apiContents();
      this.setState({ contents });
    } catch (error) {
      console.log(error);
    }
  }
  render() {
    console.log("hi");

    const { contents } = this.state;
    const { avatarUrl } = this.props;
    return contents.map((content, key) => {
      const {
        _id,
        contentType,
        comments,
        like,
        view,
        text,
        fileUrl,
        createdAt,
        authorId: { nickname }
      } = content;
      return (
        <Content
          key={key}
          id={_id}
          contentType={contentType}
          comments={comments}
          like={like}
          view={view}
          text={text}
          fileUrl={fileUrl}
          createdAt={createdAt}
          nickname={nickname}
          avatarUrl={avatarUrl}
        />
      );
    });
  }
}

export default Contents;
