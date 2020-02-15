import routes from "../routes";
import Content from "../models/Content";
import User from "../models/User";

export const checkHome = async (req, res) => {
  if (!req.user) {
    res.json({ user: { login: false } });
  } else {
    const {
      user: { nickname, avatarUrl }
    } = req;
    try {
      const contents = await Content.find({}).populate([
        {
          path: "comments",
          model: "Comment",
          populate: [
            {
              path: "author",
              model: "User"
            },
            {
              path: "comments",
              model: "Comment",
              populate: {
                path: "author",
                model: "User"
              }
            }
          ]
        },
        {
          path: "authorId",
          model: "User"
        }
      ]);
      res.json({ user: { nickname, avatarUrl, login: true }, contents });
    } catch (error) {
      console.log(error);
    }
  }
};
export const makeContent = async (req, res) => {
  const {
    body: { text }
  } = req;
  const {
    file: { path, mimetype }
  } = req;

  const {
    user: { id }
  } = req;
  try {
    await Content.create({
      authorId: id,
      fileUrl: path,
      contentType: mimetype,
      text
    });
    res.redirect(routes.home);
  } catch (error) {
    console.log(error);
  }
};
