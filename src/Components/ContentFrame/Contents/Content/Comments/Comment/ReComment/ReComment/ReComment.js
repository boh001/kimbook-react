import React, { useCallback, useState } from "react";
import PropTypes from "prop-types";
import { Avatar4 } from "Components/Avatar";
import { upCommentLike } from "api";
import {
  ReComment,
  ReCommentInfo,
  InfoAuthor,
  AuthorName,
  ReCommentReact,
  ReactLike,
  ReactShow,
  Descr
} from "./ReComment.style";

export default ({ reComment }) => {
  const {
    author: { nickname, avatarUrl },
    description,
    like,
    _id
  } = reComment;
  const [initLike, setLike] = useState(like);
  const likeJs = useCallback(async e => {
    e.preventDefault();
    const {
      data: { body }
    } = await upCommentLike(_id);

    return setLike(initLike + body);
  });
  return (
    <ReComment>
      <ReCommentInfo>
        <Avatar4 avatarUrl={avatarUrl} />
        <InfoAuthor>
          <AuthorName>{nickname}</AuthorName>
          <Descr>{description}</Descr>
        </InfoAuthor>
      </ReCommentInfo>
      <ReCommentReact>
        <ReactLike onClick={e => likeJs(e)}>좋아요</ReactLike>
        <div>
          <span>{initLike}</span>
          <span>개</span>
        </div>
        <ReactShow>댓글달기</ReactShow>
      </ReCommentReact>
    </ReComment>
  );
};
