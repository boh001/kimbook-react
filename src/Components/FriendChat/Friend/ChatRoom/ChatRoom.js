import React, { useCallback, forwardRef } from "react";
import {
  RoomFrame,
  RoomHeader,
  RoomMsg,
  RoomSub,
  HeaderInfo,
  InfoName,
  HeaderClose,
  SubInput
} from "./ChatRoom.style";
import { Avatar3 } from "Components/Avatar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { getSocket } from "socket";
import events from "socketEvent";
import Message from "./Message/Message";
export default React.forwardRef(
  ({ msg, setMsg, nickname, AvatarUrl, active, setActive }, ref) => {
    const { id, avatarUrl } = JSON.parse(localStorage.getItem("user"));
    const sendMsg = useCallback(e => {
      e.preventDefault();
      if (e.keyCode === 13) {
        const target = e.currentTarget;
        const text = target.value;
        getSocket().emit(events.SendMessage, { text, id });
        target.value = "";
        setMsg([...msg, { author: { _id: id, avatarUrl }, description: text }]);
      }
    });
    const close = useCallback(e => {
      setActive(false);
    });
    return (
      <RoomFrame active={active}>
        <RoomHeader>
          <HeaderInfo>
            <Avatar3 avatarUrl={AvatarUrl} />
            <InfoName>{nickname}</InfoName>
          </HeaderInfo>
          <HeaderClose onClick={e => close(e)}>
            <FontAwesomeIcon icon={faTimes} />
          </HeaderClose>
        </RoomHeader>
        <RoomMsg ref={ref}>
          {msg.map((m, key) => {
            const {
              author: { _id, avatarUrl },
              description
            } = m;

            return (
              <Message
                key={key}
                avatarUrl={avatarUrl}
                description={description}
                author={_id}
                me={id}
              />
            );
          })}
        </RoomMsg>
        <RoomSub>
          <SubInput onKeyUp={e => sendMsg(e)} />
        </RoomSub>
      </RoomFrame>
    );
  }
);
