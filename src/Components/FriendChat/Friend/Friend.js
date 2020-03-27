import React, { useCallback } from "react";
import { Avatar3 } from "Components/Avatar";
import { Friend, FriendInfo, InfoName } from "./Friend.style";
import socketio from "socket.io-client";
import { initSocket, getSocket } from "socket";
import events from "socketEvent";
import ChatRoom from "./ChatRoom/ChatRoom";

export default ({ id, avatarUrl, nickname }) => {
  const me = JSON.parse(localStorage.getItem("user")).id;
  let idList = [me, id].sort();
  const roomId = `${idList[0]}/${idList[1]}`;
  const joinRoom = useCallback(e => {
    e.preventDefault();
    const socket = socketio.connect("http://localhost:3000");
    initSocket(socket);
    getSocket().emit(events.JoinRoom, { roomId, idList, me });
  });
  return (
    <>
      <Friend onClick={e => joinRoom(e)}>
        <FriendInfo>
          <Avatar3 avatarUrl={avatarUrl} />
          <InfoName>{nickname}</InfoName>
        </FriendInfo>
      </Friend>
      <ChatRoom />
    </>
  );
};
