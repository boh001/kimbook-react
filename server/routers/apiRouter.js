import express from "express";
import routes from "../routes";
import {
  apiLike,
  apiView,
  apiComment,
  apiReComment,
  apiCommentLike,
  apiPlusFriend,
  apiContents,
  apiMyContent,
  apiMsg
} from "../controllers/apiCon";

const apiRouter = express.Router();

apiRouter.post(routes.contents, apiContents);
apiRouter.post(routes.myContent, apiMyContent);
apiRouter.post(routes.like, apiLike);
apiRouter.post(routes.view, apiView);
apiRouter.post(routes.comment, apiComment);
apiRouter.post(routes.reComment, apiReComment);
apiRouter.post(routes.commentLike, apiCommentLike);
apiRouter.post(routes.plusFriend, apiPlusFriend);
apiRouter.post(routes.sendMsg, apiMsg);
export default apiRouter;
