import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { color } from "./variable";
import { useUser } from "store";
import Friend from "./Friend";
import Media from "react-media";

const FriendFrame = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
`;
const FriendList = styled.div`
  position: fixed;
  width: 250px;
  height: 100%;
  border-left: 1px solid ${color.fbLine};
  right: 0%;
  @media only screen and (max-width: 1024px) {
    bottom: 0px;
    height: 50px;
    border: 1px solid ${color.fbLine};
    background-color: ${color.fbBg};
  }
`;
const ListHeader = styled.div`
  padding: 7px;
  &:after {
    content: ${props => {
      return `${props.number}`;
    }};
  }
`;
export default () => {
  const friends = useUser();

  return (
    <FriendFrame>
      <FriendList>
        <ListHeader number={friends.length}>채팅</ListHeader>
        {friends.map((friend, key) => {
          const { avatarUrl, nickname } = friend;
          return <Friend key={key} avatarUrl={avatarUrl} nickname={nickname} />;
        })}
      </FriendList>
    </FriendFrame>
  );
};
