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
import { checkHome, makeContent, getSearch } from "../controllers/homeCon";

const initRouter = express.Router();

initRouter.post(routes.home, checkHome);
initRouter.post(routes.make, contentUpload, makeContent);
initRouter.post(routes.join, contentUpload, postJoin, verifyEmail);
initRouter.post(routes.login, checkAuth, postLogin);
initRouter.post(routes.logout, logout);
initRouter.post(routes.auth, postAuth);
initRouter.post(routes.search, getSearch);
export default initRouter;
