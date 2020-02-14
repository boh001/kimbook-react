import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { color } from "./variable";

const FriendFrame = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
`;
const FriendList = styled.div`
  position: fixed;
  width: 250px;
  height: 100vh;
  border-left: 1px solid ${color.fbLine};
  right: 0%;
`;

const FriendChat = () => (
  <FriendFrame>
    <FriendList>hi</FriendList>
  </FriendFrame>
);

export default FriendChat;
