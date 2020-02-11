import express from "express";
import routes from "../routes";
import {
  postJoin,
  postLogin,
  logout,
  verifyEmail,
  checkAuth,
  postAuth
} from "../controllers/userCon";
import { contentUpload } from "../middleware";

const initRouter = express.Router();

initRouter.post(routes.join, contentUpload, postJoin, verifyEmail);
initRouter.post(routes.login, checkAuth, postLogin);
initRouter.get(routes.logout, logout);
initRouter.post(routes.auth, postAuth);
initRouter.get("/test", (req, res) => {
  console.log("3", req.user);
  if (!req.user) {
    res.json({ user: { login: false } });
  } else {
    const {
      user: { nickname, avatarUrl }
    } = req;
    res.json({ user: { nickname, avatarUrl, login: true } });
  }
});
export default initRouter;
