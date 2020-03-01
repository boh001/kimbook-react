import React, { useCallback, useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { color } from "Components/variable";
import { Avatar3 } from "./Avatar";
import { upCommentLike } from "./api";
import ReComments from "./ReComments";
const Comment = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;
const CommentInfo = styled.div`
  display: flex;
  margin-bottom: 3px;
`;
const InfoAuthor = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 35px;
  border: 1px solid ${color.fbBg};
  border-radius: 15px;
  padding: 0px 10px 0px 10px;
  background-color: ${color.fbBg};
  font-size: 16px;
  margin-left: 10px;
`;
const AuthorName = styled.div`
  color: ${color.fbBlue};
  margin-right: 5px;
`;
const CommentReact = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 11px;
  padding-left: 50px;
`;
const ReactLike = styled.div`
  margin-right: 3px;
`;
const ReactShow = styled.div`
  margin-left: 8px;
`;
const Descr = styled.div`
  max-width: 390px;
  height: auto;
  line-height: normal;
  overflow: hidden;
  overflow-wrap: break-word;
  word-wrap: break-word;
`;
export default ({ comment }) => {
  const {
    author: { nickname, avatarUrl },
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
        <InfoAuthor>
          <AuthorName>{nickname}</AuthorName>
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
