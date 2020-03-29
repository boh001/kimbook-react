import React, { useCallback, useEffect, useState } from "react";
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
import { apiMsg } from "api";
export default ({ roomId, nickname, avatarUrl, active, setActive }) => {
  const { id } = JSON.parse(localStorage.getItem("user"));
  const [msg, setMsg] = useState();
  const sendMsg = useCallback(e => {
    e.preventDefault();
    if (e.keyCode === 13) {
      const target = e.currentTarget;
      const text = target.value;
      getSocket().emit(events.SendMessage, { text, id });
    }
  });
  const close = useCallback(e => {
    setActive(false);
  });
  // useEffect(async () => {
  //   const {
  //     data: { room }
  //   } = await apiMsg(roomId);
  //   setMsg(room.message.description);
  // }, [msg]);
  return (
    <RoomFrame active={active}>
      <RoomHeader>
        <HeaderInfo>
          <Avatar3 avatarUrl={avatarUrl} />
          <InfoName>{nickname}</InfoName>
        </HeaderInfo>
        <HeaderClose onClick={e => close(e)}>
          <FontAwesomeIcon icon={faTimes} />
        </HeaderClose>
      </RoomHeader>
      <RoomMsg>{msg}</RoomMsg>
      <RoomSub>
        <SubInput onKeyUp={e => sendMsg(e)} />
      </RoomSub>
    </RoomFrame>
  );
};
