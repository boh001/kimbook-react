import express from "express";
import cookiePaser from "cookie-parser";
import routes from "./routes";
import session from "express-session";
import MongoStore from "connect-mongo";
import mongoose from "mongoose";
import passport from "passport";
import morgan from "morgan";
import helmet from "helmet";
import "./passport";
import { globalVariable } from "./middleware";
import dotenv from "dotenv";
import initRouter from "./router/initRouter";
dotenv.config();

const app = express();
app.use(morgan("dev"));
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookiePaser());
const SessionStore = MongoStore(session);
app.use(
  session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: true,
    store: new SessionStore({ mongooseConnection: mongoose.connection })
  })
);
app.use(globalVariable);
app.use(passport.initialize());
app.use(passport.session());

app.use(routes.home, initRouter);
export default app;
