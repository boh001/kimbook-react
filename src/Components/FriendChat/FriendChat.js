import React, { useCallback, useState } from "react";
import PropTypes from "prop-types";
import { useUser } from "store";
import Friend from "./Friend/Friend";
import { ListWrap, FriendList, ListHeader, Relative } from "./FriendChat.style";

export default () => {
  const friends = useUser();
  const [h, setH] = useState(false);
  const up = useCallback(e => {
    console.log(h);

    setH(!h);
  });
  return (
    <>
      <FriendList h={h}>
        {/* <Relative> */}
        <ListHeader number={friends.length} onClick={e => up(e)}>
          채팅<span>({friends.length})</span>
        </ListHeader>
        <ListWrap>
          {friends.map((friend, key) => {
            const { _id, avatarUrl, nickname } = friend;
            return (
              <Friend
                key={key}
                id={_id}
                avatarUrl={avatarUrl}
                nickname={nickname}
              />
            );
          })}
        </ListWrap>
        {/* </Relative> */}
      </FriendList>
    </>
  );
};
