import events from "socketEvent";

let socket = null;
export const getSocket = () => socket;
export const initSocket = aSocket => {
  socket = aSocket;
  socket.on(events.NewMessage, data => console.log(data));
};
