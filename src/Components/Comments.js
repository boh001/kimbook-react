import React, { useContext, useState, useCallback } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { color } from "Components/variable";
import { Avatar3 } from "./Avatar";
import { useUser } from "store";
import { apiComment } from "./api";
import Comment from "./Comment";
const Comments = styled.div`
  display: none;
  flex-direction: column;
  align-items: center;
  padding: 10px;
`;
const CommentsUp = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;
const UpInput = styled.input.attrs({
  type: "text",
  name: "comment",
  placeholder: "댓글을 입력하세요..."
})`
  word-wrap: break-word;
  width: 90%;
  height: 30px;
  margin-left: 10px;
  border: none;
  border-radius: 15px;
  padding-left: 15px;
  background-color: ${color.fbBg};
`;

const CommentWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
`;
export default ({ id, comments }) => {
  const { avatarUrl } = useUser();
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
    }
  });
  return (
    <Comments>
      <CommentsUp>
        <Avatar3 avatarUrl={avatarUrl} />
        <UpInput onKeyUp={e => CommentsWrite(e)} />
      </CommentsUp>
      <CommentWrap>
        {initComments.map((comment, key) => {
          return <Comment key={key} comment={comment} />;
        })}
      </CommentWrap>
    </Comments>
  );
};
