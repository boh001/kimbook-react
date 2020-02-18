import React, { useContext } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { color } from "Components/variable";
import { Avatar3 } from "./Avatar";
import { useUser } from "store";
const Comments = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
`;
const CommentsUp = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
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
  margin-left: 15px;
  border: none;
  border-radius: 15px;
  padding-left: 15px;
  background-color: ${color.fbBg};
`;
export default () => {
  const { nickname, avatarUrl } = useUser();
  return (
    <Comments>
      <CommentsUp>
        <Avatar3 avatarUrl={avatarUrl} />
        <UpInput />
      </CommentsUp>
    </Comments>
  );
};
