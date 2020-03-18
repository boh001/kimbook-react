import React, { useCallback, useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import moment from "moment";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp, faCommentDots } from "@fortawesome/free-regular-svg-icons";
import { color } from "../../../variable";
import { Avatar3 } from "Components/Avatar";
import { upLike } from "api";
import Comments from "./Comments/Comments";
const ContentWrap = styled.div.attrs(props => {
  return {
    id: props.ID
  };
})`
  display: grid;
  grid-auto-rows: auto;
  grid-auto-columns: 500px;
  margin-bottom: 30px;
  border-radius: ${color.frRa};
  border: 1px solid ${color.fbLine};
  background-color: ${color.fbWhite};
`;
const ContentInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 10px;
  font-weight: bold;
  font-size: 15px;
`;
const InfoAuthor = styled.div`
  display: flex;
  align-items: center;
`;
const AuthorName = styled.div`
  margin-left: 10px;
`;
const ContentImage = styled.img.attrs(props => {
  return {
    src: props.src
  };
})`
  width: 100%;
  background-color: pink;
`;
const ContentVideo = styled.video.attrs(props => {
  return {
    src: props.src,
    type: props.type,
    controls: true
  };
})`
  width: 100%;
  background-color: pink;
`;
const ContentText = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 10px 10px 10px;
`;
const ContentReact = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 10px 10px 10px;
  font-size: 15px;
`;
const ReactLike = styled.div`
  display: flex;
  align-items: center;
`;
const LikeIcon = styled.div`
  margin-right: 5px;
`;
const LikeCount = styled.div``;
const ReactInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const InfoReply = styled.div`
  margin-right: 5px;
`;

const ContentAction = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  padding: 2px;
  font-size: 20px;
  border-top: 1px solid ${color.fbLine};
  border-bottom: 1px solid ${color.fbLine};
`;
const Action = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 100%;
  height: 44px;
`;
const ActionIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  color: ${props => props.initColor};
  &:hover {
    background-color: ${color.fbBg};
  }
`;
const LikeBtn = styled.div``;
const ReplyBtn = styled.div``;
const ShareBtn = styled.div``;

export default ({
  like,
  comments,
  id,
  contentType,
  text,
  fileUrl,
  createdAt,
  nickname,
  avatarUrl
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
        <InfoAuthor>
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
