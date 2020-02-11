import routes from "./routes";
import multer from "multer";
import multerS3 from "multer-s3";
import aws from "aws-sdk";
import fs from "fs";
import path from "path";
import User from "./models/User";
import ChatRoom from "./models/chatRoom";

export const globalVariable = async (req, res, next) => {
  console.log(req.user);
  res.locals.routes = routes;
  res.locals.user = req.user || false;
  if (req.user) {
    const {
      user: { id }
    } = req;
    const users = await User.findOne({ _id: id }).populate([
      {
        path: "friends",
        model: "User"
      }
    ]);
    res.locals.users = users;
    const chats = await ChatRoom.find({ members: { $in: [id] } }).populate([
      {
        path: "members",
        model: "User"
      },
      {
        path: "messages",
        model: "Message",
        populate: [
          {
            path: "author",
            model: "User"
          }
        ]
      }
    ]);
    res.locals.chats = chats;
  }
  next();
};
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    if (!req.body.nickname) {
      var {
        user: { nickname }
      } = req;
    } else {
      var {
        body: { nickname }
      } = req;
    }
    const { mimetype } = file;
    const store = `uploads/${nickname}/${mimetype.split("/")[0]}`;

    fs.mkdirSync(path.join(__dirname, store), { recursive: true }, err => {
      console.log(err);
    });
    cb(null, `server/${store}`);
  }
});
export const contentUpload = multer({ storage }).single("content");
// const s3 = new aws.S3({
//   secretAccessKey: process.env.AWS_SECRET_KEY,
//   accessKeyId: process.env.AWS_KEY
// });
// const upload = multer({
//   storage: multerS3({
//     s3,
//     acl: "public-read",
//     key: (req, file, cb) => {
//       cb(null, Date.now().toString());
//     },
//     bucket: (req, file, cb) => {
//       if (!req.user) {
//         var {
//           body: { nickname }
//         } = req;
//       } else {
//         var {
//           user: { nickname }
//         } = req;
//       }
//       console.log("middel", file);

//       const { mimetype } = file;
//       const bucket = `kimbook-react/${nickname}/${mimetype.split("/")[0]}`;
//       cb(null, bucket);
//     }
//   })
// });
// export const contentUpload = upload.single("content");
