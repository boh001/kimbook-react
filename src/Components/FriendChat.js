import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { color } from "./variable";
import { useUser } from "store";
import Friend from "./Friend";

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

  @media only screen and (max-width: 1100px) {
    bottom: 0px;
    height: 35px;
    width: 210px;
    right: 50px;
    border: 1px solid ${color.fbLine};
    background-color: ${color.fbWhite};
    border-radius: ${color.frRa};
    border-bottom: none;
    -webkit-box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12),
      0 1px 2px rgba(0, 0, 0, 0.24);
    -moz-box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12),
      0 1px 2px rgba(0, 0, 0, 0.24);
    -ms-box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    -o-box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    -webkit-transition: all 0.25s ease-in-out;
    -moz-transition: all 0.25s ease-in-out;
    -ms-transition: all 0.25s ease-in-out;
    -o-transition: all 0.25s ease-in-out;
    transition: all 0.25s ease-in-out;
    &:hover {
      height: 300px;
      transition: all ease 0.5s;
    }
  }
`;
const ListHeader = styled.div`
  display: none;
  font-size: 15px;
  font-weight: bold;
  padding: 10px 10px 10px 10px;
  &:after {
    content: "(2)";
  }
  @media only screen and (max-width: 1100px) {
    display: block;
    border-bottom: 1px solid ${color.fbLine};
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
