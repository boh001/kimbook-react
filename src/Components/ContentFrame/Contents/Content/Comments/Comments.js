import React, { useContext, useState, useCallback } from "react";
import PropTypes from "prop-types";

import { Avatar3 } from "Components/Avatar";
import { apiComment } from "api";
import Comment from "./Comment/Comment";
import {
  Comments,
  CommentsUp,
  UpInput,
  CommentWrap
} from "./Comments.style.js";

export default ({ id, comments, setLength }) => {
  const { avatarUrl } = JSON.parse(localStorage.getItem("user"));
  const [initComments, setComments] = useState(comments);
  const CommentsWrite = useCallback(async e => {
    if (e.keyCode === 13) {
      e.preventDefault();
      const text = e.target.value;
      e.target.value = "";
      const {
        data: { newComment }
      } = await apiComment(id, text);
      setComments([...initComments, newComment]);

      setLength(++initComments.length);
    }
  });
  const autoSize = useCallback(e => {
    e.target.style.height = "auto";
    e.target.style.height = e.target.scrollHeight + "px";
  });

  return (
    <Comments>
      <CommentsUp>
        <Avatar3 avatarUrl={avatarUrl} />
        <UpInput onKeyUp={e => CommentsWrite(e)} onKeyDown={e => autoSize(e)} />
      </CommentsUp>
      <CommentWrap>
        {initComments.map((comment, key) => {
          return <Comment key={key} comment={comment} />;
        })}
      </CommentWrap>
    </Comments>
  );
};
