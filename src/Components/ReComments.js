import React, { useContext, useState, useCallback } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { color } from "Components/variable";
import { Avatar4 } from "./Avatar";
import { apiReComment } from "./api";
import { useUser } from "store";
import ReComment from "./ReComment";
const ReComments = styled.div`
  display: none;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  width: 95%;
`;
const ReCommentsUp = styled.div`
  width: 100%;
  display: flex;
  margin-left: 70px;
  justify-content: flex-start;
  align-items: center;
`;
const UpInput = styled.textarea.attrs({
  name: "reComment",
  placeholder: "댓글을 입력하세요..."
})`
  word-wrap: break-word;
  width: 90%;
  height: 30px;
  overflow: hidden;
  margin-left: 10px;
  border: none;
  border-radius: 15px;
  padding-left: 15px;
  padding-top: 8px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background-color: ${color.fbBg};
  &:focus {
    outline: none;
  }
`;

const ReCommentWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
`;
export default ({ id, Recomments }) => {
  const { avatarUrl } = useUser();
  const [initReComments, setReComments] = useState(Recomments);
  const reCommentsWrite = useCallback(async e => {
    if (e.keyCode === 13) {
      e.preventDefault();
      const text = e.target.value;
      e.target.value = "";
      const {
        data: { newReComment }
      } = await apiReComment(id, text);
      setReComments([...initReComments, newReComment]);
    }
  });
  const autoSize = useCallback(e => {
    e.target.style.height = e.target.scrollHeight + "px";
  });
  return (
    <ReComments>
      <ReCommentsUp>
        <Avatar4 avatarUrl={avatarUrl} />
        <UpInput
          onKeyUp={e => reCommentsWrite(e)}
          onKeyDown={e => autoSize(e)}
        />
      </ReCommentsUp>
      <ReCommentWrap>
        {initReComments.map((reComment, key) => {
          return <ReComment key={key} reComment={reComment} />;
        })}
      </ReCommentWrap>
    </ReComments>
  );
};
