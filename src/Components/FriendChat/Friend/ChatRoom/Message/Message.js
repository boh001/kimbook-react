import React from "react";
import { MessageFrame, MessageDes } from "./Message.style";
import { Avatar3 } from "Components/Avatar";
export default ({ author, me, avatarUrl, description }) => {
  return (
    <MessageFrame who={author === me}>
      <Avatar3 avatarUrl={avatarUrl} />
      <MessageDes>{description}</MessageDes>
    </MessageFrame>
  );
};
