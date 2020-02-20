import Content from "../models/Content";
import Comment from "../models/Comment";
import User from "../models/User";
export const apiContents = async (req, res) => {
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
    res.json({ contents });
  } catch (error) {
    console.log(error);
  }
};
export const apiLike = async (req, res) => {
  const {
    body: { id }
  } = req;
  const {
    user: { _id }
  } = req;
  try {
    const content = await Content.findOne({ _id: id });
    const likeUsers = content.likeUsers;
    if (likeUsers.includes(_id)) {
      await content.updateOne({
        $inc: { like: -1 },
        $pull: { likeUsers: _id }
      });
      res.json({ body: 0 });
    } else {
      await content.updateOne({
        $inc: { like: 1 },
        $push: { likeUsers: _id }
      });
      res.json({ body: 1 });
    }
  } catch (error) {
    console.log(error);
  }
};
export const apiView = async (req, res) => {
  const {
    body: { id }
  } = req;

  try {
    await Content.findOneAndUpdate({ _id: id }, { $inc: { view: 1 } });
    res.status(200);
    res.send({
      headers: {
        "Content-Type": "text/html"
      },
      body: 1
    });
  } catch (error) {
    console.log(error);
  }
};
export const apiComment = async (req, res) => {
  const {
    body: { id, comment }
  } = req;
  const {
    user: { _id }
  } = req;
  try {
    const createComment = await Comment.create({
      author: _id,
      description: comment
    });
    await Content.findOneAndUpdate(
      { _id: id },
      { $push: { comments: createComment._id } }
    );
    const newComment = await Comment.findOne({
      _id: createComment._id
    }).populate([
      {
        path: "author",
        model: "User"
      }
    ]);
    console.log(newComment);

    res.json({ newComment });
  } catch (error) {
    console.log(error);
  }
};
export const apiReComment = async (req, res) => {
  const {
    body: { id, text }
  } = req;
  const {
    user: { _id }
  } = req;
  try {
    const newReComment = await Comment.create({
      author: _id,
      description: text
    });
    await Comment.findOneAndUpdate(
      { _id: id },
      { $push: { comments: newReComment._id } }
    );
    const author = await User.findOne({ _id });
    const comment = await Comment.findOne({ _id: id });
    const reply = comment.comments.length;

    res.status(200);
    res.send({
      headers: {
        "Content-Type": "application/json"
      },
      body: { avatar: author.avatarUrl, reply }
    });
  } catch (error) {
    console.log(error);
  }
};
export const apiCommentLike = async (req, res) => {
  const {
    body: { id }
  } = req;
  const {
    user: { _id }
  } = req;

  try {
    const comment = await Comment.findOne({ _id: id });
    const likeUsers = comment.likeUsers;
    if (likeUsers.includes(_id)) {
      await comment.updateOne({
        $inc: { like: -1 },
        $pull: { likeUsers: _id }
      });
      res.status(200);
      res.json({ body: 0 });
    } else {
      await comment.updateOne({
        $inc: { like: 1 },
        $push: { likeUsers: _id }
      });
      res.status(200);
      res.json({ body: 1 });
    }
  } catch (error) {
    console.log(error);
  }
};
export const apiPlusFriend = async (req, res) => {
  const {
    body: { id }
  } = req;
  const {
    user: { _id }
  } = req;

  try {
    const user = await User.findOne({ _id });
    if (!user.friends.includes(id)) {
      await user.updateOne({ $push: { friends: id } });
      await User.findOneAndUpdate({ _id: id }, { $push: { friends: _id } });
    }
    res.status(200);
    res.send("ok");
  } catch (error) {
    console.log(error);
  }
};
