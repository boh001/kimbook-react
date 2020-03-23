import React from "react";
import PropTypes from "prop-types";
import { useUser } from "store";
import Friend from "./Friend/Friend";
import { FriendFrame, FriendList, ListHeader } from "./FriendChat.style";

export default () => {
  const friends = useUser();

  return (
    <>
      <FriendList>
        <ListHeader number={friends.length}>채팅</ListHeader>
        {friends.map((friend, key) => {
          const { id, avatarUrl, nickname } = friend;
          return (
            <Friend
              key={key}
              id={id}
              avatarUrl={avatarUrl}
              nickname={nickname}
            />
          );
        })}
      </FriendList>
    </>
  );
};
