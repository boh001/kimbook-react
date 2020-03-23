import React from "react";
import Content from "./Content/Content";
import { useContents } from "store";

export default () => {
  const contents = useContents();
  return (
    <>
      {contents.map((content, key) => {
        const {
          _id,
          contentType,
          comments,
          like,
          view,
          text,
          fileUrl,
          createdAt,
          authorId
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
            nickname={authorId.nickname}
            avatarUrl={authorId.avatarUrl}
            authorId={authorId._id}
          />
        );
      })}
    </>
  );
};
