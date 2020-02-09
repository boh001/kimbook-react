import express from "express";

const initRouter = express.Router();

initRouter.get("/test", (req, res) => {
  res.send({
    headers: {
      "Content-Type": "text/html"
    },
    body: false
  });
});
export default initRouter;
