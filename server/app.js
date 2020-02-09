import express from "express";
import cookiePaser from "cookie-parser";
import routes from "./routes";
import initRouter from "./router/initRouter";
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookiePaser());

app.use(routes.home, initRouter);
export default app;
