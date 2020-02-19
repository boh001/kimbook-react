import routes from "../routes";
import Content from "../models/Content";
import User from "../models/User";

export const checkHome = async (req, res) => {
  console.log("hi");

  if (!req.user) {
    res.json({ user: { login: false } });
  } else {
    const {
      user: { nickname, avatarUrl }
    } = req;

    res.json({ user: { nickname, avatarUrl, login: true } });
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
