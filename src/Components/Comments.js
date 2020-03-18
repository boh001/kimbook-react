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
const UpInput = styled.textarea.attrs({
  name: "comment",
  placeholder: "댓글을 입력하세요..."
})`
  word-wrap: break-word;
  width: 90%;
  height: 35px;
  overflow: hidden;
  margin-left: 10px;
  border: none;
  border-radius: 15px;
  padding-left: 15px;
  padding-top: 10px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background-color: ${color.fbBg};
  &:focus {
    outline: none;
  }
`;

const CommentWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
`;
export default ({ id, comments, setLength }) => {
  const { avatarUrl } = JSON.parse(localStorage.getItem("user"));
  const [initComments, setComments] = useState(comments);
  const [inith, seth] = useState(false);
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
    e.target.style.height = e.target.scrollHeight + "px";
    if (e.target.style.height !== "35px") {
      seth(true);
    }
  });

  return (
    <Comments>
      <CommentsUp>
        <Avatar3 avatarUrl={avatarUrl} />
        <UpInput onKeyUp={e => CommentsWrite(e)} onKeyDown={e => autoSize(e)} />
      </CommentsUp>
      <CommentWrap>
        {initComments.map((comment, key) => {
          return <Comment key={key} comment={comment} h={inith} />;
        })}
      </CommentWrap>
    </Comments>
  );
};
