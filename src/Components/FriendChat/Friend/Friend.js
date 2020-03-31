import React, { useCallback, useState, useRef } from "react";
import { Avatar3 } from "Components/Avatar";
import { Friend, FriendInfo, InfoName } from "./Friend.style";
import socketio from "socket.io-client";
import { initSocket, getSocket } from "socket";
import events from "socketEvent";
import ChatRoom from "./ChatRoom/ChatRoom";
import { apiMsg } from "api";

export default ({ id, avatarUrl, nickname }) => {
  const [active, setActive] = useState(false);
  const [msg, setMsg] = useState([]);
  const me = JSON.parse(localStorage.getItem("user")).id;
  let idList = [me, id].sort();
  const roomId = `${idList[0]}/${idList[1]}`;
  const chatRef = useRef();
  const joinRoom = useCallback(async e => {
    e.preventDefault();
    const socket = socketio.connect("http://localhost:3000");
    initSocket(socket);
    getSocket().emit(events.JoinRoom, { roomId, idList, me });
    setActive(true);
    const {
      data: { messages }
    } = await apiMsg(roomId);
    setMsg([...messages]);
    chatRef.current.scrollTop = chatRef.current.scrollHeight;
  });

  return (
    <>
      <Friend onClick={e => joinRoom(e)}>
        <FriendInfo>
          <Avatar3 avatarUrl={avatarUrl} />
          <InfoName>{nickname}</InfoName>
        </FriendInfo>
      </Friend>
      <ChatRoom
        ref={chatRef}
        roomId={roomId}
        nickname={nickname}
        AvatarUrl={avatarUrl}
        active={active}
        setActive={setActive}
        msg={msg}
        setMsg={setMsg}
      />
    </>
  );
};
