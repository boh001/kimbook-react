import React from "react";
import { Avatar3 } from "Components/Avatar";
import { Friend, FriendInfo, InfoName } from "./Friend.style";

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
