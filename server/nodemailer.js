import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();

export const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GM_ID,
    pass: process.env.GM_PWD
  }
});

export const mailOptions = (host, nickname, to, key) => {
  return {
    from: "kimbook",
    to,
    subject: `Hello ${nickname}, please verify your email`,
    html: `<div style="display:flex; flex-direction:column; justify-content:flex-start; align-items:center; width:600px; height:500px; border-radius: 2px;
      -webkit-box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12),
        0 1px 2px rgba(0, 0, 0, 0.24);
      -moz-box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
      -ms-box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
      -o-box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
      -webkit-transition: all 0.25s ease-in-out;
      -moz-transition: all 0.25s ease-in-out;
      -ms-transition: all 0.25s ease-in-out;
      -o-transition: all 0.25s ease-in-out;
      transition: all 0.25s ease-in-out;">
      <div style="width:100%; height:100px; background-color:#1877f2; color:white; display:flex;  justify-content:center; align-items:center; font-size:50px; font-weight:bold; ">
        Kimbook
      </div>
      <div style="font-size: 25px ; color:#1877f2; margin-top: 30px; margin-bottom: 20px">
        Verify Your Email
      </div>
      <div style="font-size: 15px ; font-weight:bold; color:#636e72; margin-bottom: 40px;">
        Hello ${nickname}
        <br><br>
        thank you for signing up to Kimbook.<br><br>Please click on the following button to activate your token
      <br><br> Sincerely
    <br>Developer Kim
      </div>
    <a href="http://${host}/auth/?key=${key}" style="text-decoration:none; color: #1877f2; font-size: 15px; font-weight:bold; ">Click here</a>
    </div>`
  };
};
