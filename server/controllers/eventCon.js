import events from "../socketEvent";
import ChatRoom from "../models/chatRoom";
import Message from "../models/message";
import User from "../models/User";

export const JoinRoom = async (socket, { roomId, idList, me }) => {
  const user = await User.findOne({ _id: me });

  socket.nickname = user.nickname;
  socket.room = roomId;
  console.log(socket.nickname, socket.room);

  const room = await ChatRoom.findOne({ _id: roomId });
  if (!room) {
    try {
      await ChatRoom.create({
        _id: roomId,
        members: idList
      });
      socket.join(roomId);
    } catch (error) {
      console.log(error);
    }
  }
};
export const SendMessage = async (socket, { text, id }) => {
  const msg = await Message.create({
    author: id,
    description: text
  });
  console.log(msg);

  await ChatRoom.findOneAndUpdate(
    { _id: socket.room },
    { $push: { messages: msg.id } }
  );

  const user = await User.findOne({ _id: id });
  socket.broadcast.emit(events.NewMessage, {
    avatarUrl: user.avatarUrl,
    nickname: socket.nickname,
    text
  });
};
