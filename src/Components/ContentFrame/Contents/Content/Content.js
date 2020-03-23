import React, { useCallback, useState } from "react";
import PropTypes from "prop-types";
import moment from "moment";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp, faCommentDots } from "@fortawesome/free-regular-svg-icons";
import { Avatar3 } from "Components/Avatar";
import { upLike } from "api";
import Comments from "./Comments/Comments";
import {
  ContentWrap,
  ContentInfo,
  InfoAuthor,
  AuthorName,
  ContentImage,
  ContentVideo,
  ContentText,
  ContentReact,
  ReactLike,
  LikeIcon,
  LikeCount,
  ReactInfo,
  InfoReply,
  ContentAction,
  Action,
  ActionIcon,
  LikeBtn,
  ReplyBtn,
  ShareBtn
} from "./Content.style";

export default ({
  like,
  comments,
  id,
  contentType,
  text,
  fileUrl,
  createdAt,
  nickname,
  avatarUrl,
  authorId
}) => {
  const [initLike, setLike] = useState(like);
  const [initColor, setColor] = useState("");
  const [length, setLength] = useState(comments.length);

  const likeJs = useCallback(async e => {
    e.preventDefault();
    const {
      data: { body, color }
    } = await upLike(id);
    setColor(color);
    return setLike(initLike + body);
  });
  const showComment = useCallback(e => {
    e.preventDefault();
    const comment = e.currentTarget.parentNode.parentNode.nextSibling;
    comment.style.display = "flex";
  });

  return (
    <ContentWrap>
      <ContentInfo>
        <InfoAuthor to={`/profile/${authorId}`}>
          <Avatar3 avatarUrl={avatarUrl} />
          <AuthorName>{nickname}</AuthorName>
        </InfoAuthor>
        <h1>{moment(createdAt).format("LL")}</h1>
      </ContentInfo>
      <ContentText>{text}</ContentText>
      {contentType.split("/")[0] === "video" ? (
        <ContentVideo src={fileUrl} type={contentType} />
      ) : (
        <ContentImage src={fileUrl} />
      )}
      <ContentReact>
        <ReactLike>
          <LikeIcon>
            <FontAwesomeIcon icon={faThumbsUp} size="lg" />
          </LikeIcon>
          <LikeCount>{initLike}</LikeCount>
        </ReactLike>
        <ReactInfo>
          <InfoReply>댓글</InfoReply>
          <InfoReply>{length}</InfoReply>
        </ReactInfo>
      </ContentReact>

      <ContentAction>
        <Action>
          <ActionIcon onClick={e => likeJs(e)} initColor={initColor}>
            <FontAwesomeIcon icon={faThumbsUp} size="lg" />
            <LikeBtn>좋아요</LikeBtn>
          </ActionIcon>
          <ActionIcon onClick={e => showComment(e)}>
            <FontAwesomeIcon icon={faCommentDots} size="lg" />
            <ReplyBtn>댓글</ReplyBtn>
          </ActionIcon>
          <ActionIcon>
            <ShareBtn>공유하기</ShareBtn>
          </ActionIcon>
        </Action>
      </ContentAction>
      <Comments id={id} comments={comments} setLength={setLength} />
    </ContentWrap>
  );
};
