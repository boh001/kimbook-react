import React, { useCallback, useState } from "react";
import PropTypes from "prop-types";
import { Avatar3 } from "Components/Avatar";
import { upCommentLike } from "api";
import ReComments from "./ReComment/ReComments";
import {
  Comment,
  CommentInfo,
  InfoAuthor,
  AuthorName,
  CommentReact,
  ReactLike,
  ReactShow,
  Descr
} from "./Comment.style";
export default ({ h, comment }) => {
  let Rh = h;
  const {
    author: { nickname, avatarUrl },
    author,
    comments,
    description,
    like,
    _id
  } = comment;
  const [initLike, setLike] = useState(like);
  const likeJs = useCallback(async e => {
    e.preventDefault();
    const {
      data: { body }
    } = await upCommentLike(_id);
    return setLike(initLike + body);
  });
  const showComment = useCallback(e => {
    e.preventDefault();
    const comment = e.currentTarget.parentNode.nextSibling;
    comment.style.display = "flex";
  });
  return (
    <Comment>
      <CommentInfo>
        <Avatar3 avatarUrl={avatarUrl} />
        <InfoAuthor h={Rh}>
          <AuthorName to={`/profile/${author._id}`}>{nickname}</AuthorName>
          <Descr>{description}</Descr>
        </InfoAuthor>
      </CommentInfo>
      <CommentReact>
        <ReactLike onClick={e => likeJs(e)}>좋아요</ReactLike>
        <div>
          <span>{initLike}</span>
          <span>개</span>
        </div>
        <ReactShow onClick={e => showComment(e)}>댓글보기</ReactShow>
      </CommentReact>
      <ReComments id={_id} Recomments={comments} />
    </Comment>
  );
};
