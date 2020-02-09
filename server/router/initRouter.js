import express from "express";

const initRouter = express.Router();
initRouter.get("/test", (req, res) => {
  res.send({
    headers: {
      "Content-Type": "text/html"
    },
    body: -1
  });
});
export default initRouter;
