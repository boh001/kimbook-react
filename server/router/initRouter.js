import express from "express";
import routes from "../routes";
import { postLogin, postJoin, verifyEmail } from "../controller/userCon";
import { contentUpload } from "../middleware";
const initRouter = express.Router();

initRouter.post(
  routes.join,
  (req, res, next) => {
    console.log(req.body);
    next();
  },
  contentUpload,
  postJoin,
  verifyEmail
);
initRouter.post(routes.login, postLogin);
initRouter.get("/test", (req, res) => {
  res.send({
    headers: {
      "Content-Type": "text/html"
    },
    body: false
  });
});
export default initRouter;
