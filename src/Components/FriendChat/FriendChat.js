import React from "react";
import PropTypes from "prop-types";
import { useUser } from "store";
import Friend from "./Friend/Friend";
import { ListWrap, FriendList, ListHeader } from "./FriendChat.style";

export default () => {
  const friends = useUser();

  return (
    <>
      <FriendList>
        <ListHeader number={friends.length}>
          채팅<span>({friends.length})</span>
        </ListHeader>
        <ListWrap>
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
        </ListWrap>
      </FriendList>
    </>
  );
};
