import React, { useCallback, useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { color } from "Components/variable";
import { Avatar4 } from "./Avatar";
import { upReCommentLike } from "./api";

const ReComment = styled.div`
  margin-top: 10px;
  margin-left: 35px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;
const ReCommentInfo = styled.div`
  display: flex;
  margin-bottom: 3px;
`;
const InfoAuthor = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 30px;
  border: 1px solid ${color.fbBg};
  border-radius: 15px;
  padding: 0px 10px 0px 10px;
  background-color: ${color.fbBg};
  font-size: 13px;
  margin-left: 10px;
`;
const AuthorName = styled.div`
  color: ${color.fbBlue};
  font-size: 13px;
  margin-right: 5px;
`;
const ReCommentReact = styled.div`
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
export default ({ reComment }) => {
  console.log(reComment);

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
    } = await upReCommentLike(_id);
    return setLike(body);
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
        <ReactShow>댓글보기</ReactShow>
      </ReCommentReact>
    </ReComment>
  );
};
