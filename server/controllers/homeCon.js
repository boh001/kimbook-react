import routes from "../routes";
import Content from "../models/Content";
import User from "../models/User";

export const checkHome = async (req, res) => {
  console.log("hi");

  if (!req.user) {
    res.json({ user: { login: false } });
  } else {
    const {
      user: { id, nickname, avatarUrl }
    } = req;
    try {
      const me = await User.findOne({ _id: id }).populate([
        {
          path: "friends",
          model: "User"
        }
      ]);
      const friends = me.friends;

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
      res.json({
        user: { id, nickname, avatarUrl, login: true },
        friends,
        contents
      });
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
    file: { location, mimetype }
  } = req;
  const {
    user: { id }
  } = req;
  try {
    await Content.create({
      authorId: id,
      fileUrl: location,
      contentType: mimetype,
      text
    });
    res.redirect(routes.home);
  } catch (error) {
    console.log(error);
  }
};

export const getSearch = async (req, res) => {
  const {
    body: { search }
  } = req;

  const users = await User.find({
    nickname: { $regex: `${search}`, $options: "i" }
  });

  res.json({ users });
};
