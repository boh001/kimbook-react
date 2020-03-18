import "@babel/polyfill";
import app from "./app";
import dotenv from "dotenv";
import "./db";
import "./models/Comment";
import "./models/Content";
import "./models/message";

dotenv.config();
const port = process.env.SERVER_PORT || 3001;
app.listen(port, () => {
  console.log(`Listen : http://localhost:${port}`);
});
