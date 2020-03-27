import "@babel/polyfill";
import app from "./app";
import dotenv from "dotenv";
import "./db";
import "./models/chatRoom";
import "./models/Comment";
import "./models/Content";
import "./models/message";
import "./models/User";
import socketIO from "socket.io";
import SocketController from "./controllers/socketCon";
dotenv.config();

const port = process.env.PORT || 3002;
const server = app.listen(port, () => {
  console.log(`Listen : http://localhost:${port}`);
});
const io = socketIO.listen(server);
io.on("connection", socket => {
  SocketController(socket, io);
});
