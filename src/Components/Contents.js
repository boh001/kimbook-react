import React from "react";
import Content from "./Content";
import { useContents, useUser } from "../store";

export default () => {
  const contents = useContents();
  const { avatarUrl } = useUser();
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
      })}
    </>
  );
};
