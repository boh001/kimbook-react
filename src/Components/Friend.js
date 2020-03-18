import React from "react";
import styled from "styled-components";
import { Avatar3 } from "./Avatar";

const Friend = styled.div`
  cursor: pointer;
  display: flex;
  padding: 10px 10px 7px 10px;
  flex-direction: column;
  width: 100%;
  &:hover {
    background-color: #dcdee2;
  }
`;
const FriendInfo = styled.div`
  display: flex;
  align-items: center;
`;
const InfoName = styled.div`
  margin-left: 5px;
`;

export default ({ id, avatarUrl, nickname }) => {
  return (
    <Friend>
      <FriendInfo>
        <Avatar3 avatarUrl={avatarUrl} />
        <InfoName>{nickname}</InfoName>
      </FriendInfo>
    </Friend>
  );
};
