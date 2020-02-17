import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import moment from "moment";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp, faCommentDots } from "@fortawesome/free-regular-svg-icons";
import { useUser } from "store";
import { color } from "./variable";
import { useContents } from "../store";
import { Avatar3 } from "./Avatar";

const ContentWrap = styled.div`
  display: grid;
  grid-auto-rows: auto;
  width: 100%;
  margin: 15px 15px;
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
const ContentMain = styled.img.attrs(props => {
  return {
    src: props.src
  };
})`
  object-fit: cover;
  height: 480px;
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
  &:hover {
    background-color: ${color.fbBg};
  }
`;
const LikeBtn = styled.div``;
const ReplyBtn = styled.div``;
const ShareBtn = styled.div``;
const Content = () => {
  const { nickname, avatarUrl } = useUser();
  const contents = useContents();
  console.log(contents);

  return contents.map((content, key) => {
    const {
      contentType,
      comments,
      like,
      view,
      text,
      fileUrl,
      createdAt,
      authorId: { nickname }
    } = content;
    return (
      <ContentWrap>
        <>
          <ContentInfo>
            <InfoAuthor>
              <Avatar3 avatarUrl={avatarUrl} />
              <AuthorName>{nickname}</AuthorName>
            </InfoAuthor>
            <h1>{moment(createdAt).format("LL")}</h1>
          </ContentInfo>
          <ContentText>{text}</ContentText>
          {contentType.split("/")[0] === "video" ? (
            <>
              <ContentMain key={key} src={fileUrl} />
              <ContentReact>
                <ReactLike>
                  <LikeIcon>
                    <FontAwesomeIcon icon={faThumbsUp} size="lg" />
                  </LikeIcon>
                  <LikeCount>{like}</LikeCount>
                </ReactLike>
                <ReactInfo>
                  <InfoReply>댓글</InfoReply>
                  <InfoReply>{comments.length}</InfoReply>
                  <InfoReply>조회수</InfoReply>
                  <InfoReply>{view}</InfoReply>
                </ReactInfo>
              </ContentReact>
            </>
          ) : (
            <>
              <ContentMain key={key} src={fileUrl} />
              <ContentReact>
                <ReactLike>
                  <LikeIcon>
                    <FontAwesomeIcon icon={faThumbsUp} size="lg" />
                  </LikeIcon>
                  <LikeCount>{like}</LikeCount>
                </ReactLike>
                <ReactInfo>
                  <InfoReply>댓글</InfoReply>
                  <InfoReply>{comments.length}</InfoReply>
                </ReactInfo>
              </ContentReact>
            </>
          )}
          <ContentAction>
            <Action>
              <ActionIcon>
                <FontAwesomeIcon icon={faThumbsUp} size="lg" />
                <LikeBtn>좋아요</LikeBtn>
              </ActionIcon>
              <ActionIcon>
                <FontAwesomeIcon icon={faCommentDots} size="lg" />
                <ReplyBtn>댓글</ReplyBtn>
              </ActionIcon>
              <ActionIcon>
                <ShareBtn>공유하기</ShareBtn>
              </ActionIcon>
            </Action>
          </ContentAction>
        </>
      </ContentWrap>
    );
  });
};
export default Content;
