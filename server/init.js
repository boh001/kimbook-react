import "@babel/polyfill";
import dotenv from "dotenv";
dotenv.config();
import app from "./server";
const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Listen : http://localhost:${port}`);
});
