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
import { checkHome, makeContent } from "../controllers/homeCon";

const initRouter = express.Router();

initRouter.post(routes.home, checkHome);
initRouter.post(routes.make, contentUpload, makeContent);
initRouter.post(routes.join, contentUpload, postJoin, verifyEmail);
initRouter.post(routes.login, checkAuth, postLogin);
initRouter.get(routes.logout, logout);
initRouter.post(routes.auth, postAuth);
export default initRouter;
