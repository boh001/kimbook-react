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
  res.send({
    headers: {
      "Content-Type": "text/html"
    },
    body: false
  });
});
export default initRouter;
