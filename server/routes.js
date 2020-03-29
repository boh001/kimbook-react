//HOME
const HOME = "/";
const ME = "/me";
const JOIN = "/join";
const LOGIN = "/login";
const LOGOUT = "/logout";
const AUTH = "/auth";
const MAKE = "/make";
const SEARCH = "/search";

//API
const API = "/api";
const CONTENTS = "/contents";
const LIKE = "/:id/like";
const VIEW = "/:id/view";
const PLUSFRIEND = "/:id/plusFriend";
const COMMENT = "/:id/comment";
const RECOMMENT = "/:id/reComment";
const COMMENTLIKE = "/:id/commentLike";
const MYCONTENT = "/myContent";
const SENDMSG = "/:id/apiMsg";

//USER
const USER = "/user";
const PROFILE = "/:id/profile";
const EDITPROFILE = "/:id/editProfile";

const routes = {
  home: HOME,
  me: ME,
  make: MAKE,
  search: SEARCH,
  user: USER,
  join: JOIN,
  login: LOGIN,
  logout: LOGOUT,
  api: API,
  myContent: MYCONTENT,
  contents: CONTENTS,
  like: LIKE,
  view: VIEW,
  plusFriend: PLUSFRIEND,
  comment: COMMENT,
  reComment: RECOMMENT,
  commentLike: COMMENTLIKE,
  sendMsg: SENDMSG,
  profile: id => {
    if (id) {
      return `${USER}/${id}/profile`;
    } else {
      return PROFILE;
    }
  },
  editProfile: id => {
    if (id) {
      return `${USER}/${id}/editProfile`;
    } else {
      return EDITPROFILE;
    }
  },

  auth: AUTH
};

export default routes;
