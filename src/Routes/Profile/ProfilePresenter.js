import React from "react";
import styled from "styled-components";
import Headers from "Components/Header";
import { color } from "Components/variable";
import { Link } from "react-router-dom";
import Content from "Components/Content";
import MyContent from "Components/MyContent/MyContent";

const ProfileFrame = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
`;
const ProfileCover = styled.div`
  width: 850px;
`;
const ProfileHeader = styled.div`
  position: relative;
  margin-top: 40px;
  height: 250px;
  border: 1px solid ${color.fbLine};
  border-radius: ${color.frRa};
`;
const HeaderBg = styled.img.attrs({
  src:
    "https://kimbookreact.s3.ap-northeast-2.amazonaws.com/kim/image/1581935426485"
})`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: 50% 15%;
`;
const HeaderAvatar = styled.img.attrs({
  src:
    "https://kimbookreact.s3.ap-northeast-2.amazonaws.com/kim/image/1581935426485"
})`
  position: absolute;
  padding: 5px;
  top: 100px;
  right: 665px;
  width: 170px;
  height: 170px;
  border-radius: 50%;
  background-color: white;
`;
const HeaderLists = styled.div`
  display: grid;
  height: 50px;
  grid-template-columns: 1fr repeat(5, 100px) 1fr;
  border: 1px solid ${color.fbLine};
  border-top: none;
  border-radius: ${color.frRa};

  &:nth-child(2) {
    background-color: ${color.fbWhite};
    border-left: 1px solid ${color.fbLine};
    border-right: 1px solid ${color.fbLine};
  }
`;

const HiddenLists = styled.div`
  display: grid;
  padding: 10px 0px 10px 0px;
  grid-gap: 10px;
  align-items: center;
  justify-content: center;
  width: 100px;
  grid-template-columns: (5, 1fr);
  position: absolute;
  top: 339px;
  background-color: ${color.fbWhite};
  border: 1px solid ${color.fbLine};
  visibility: hidden;
  opacity: 0;
  transition: all ease 0.5s;
`;
const HiddenList = styled.div`
  width: 100%;
  &:hover {
    background-color: ${color.fbBg};
  }
`;
const ListsUL = styled(Link)`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${color.fbWhite};
  border-left: 1px solid ${color.fbLine};
  color: ${color.fbBlue};
  font-weight: bold;
  &:hover {
    background-color: ${color.fbBg};
  }
  &:hover ${HiddenLists} {
    visibility: visible;
    opacity: 1;
  }
`;
const HeaderMain = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 15px;
  width: 100%;
  height: 100%;
`;
const MyStorage = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
  height: 900px;
  padding-right: 15px;
`;

const MyContents = styled.div`
  width: 500px;
`;
export default ({ myContents, myFriends }) => {
  const { name, avatarUrl } = JSON.parse(localStorage.getItem("user"));
  return (
    <>
      <Headers />
      <ProfileFrame>
        <ProfileCover>
          <ProfileHeader>
            <HeaderBg />
            <HeaderAvatar />
          </ProfileHeader>
          <HeaderLists>
            <div></div>
            <ListsUL to="/">타임라인</ListsUL>
            <ListsUL to="#">정보</ListsUL>
            <ListsUL to="#">친구</ListsUL>
            <ListsUL to="#">사진</ListsUL>
            <ListsUL to="#">
              더보기
              <HiddenLists>
                <HiddenList>책</HiddenList>
                <HiddenList>좋아요</HiddenList>
                <HiddenList>이벤트</HiddenList>
                <HiddenList>음악</HiddenList>
                <HiddenList>영화</HiddenList>
              </HiddenLists>
            </ListsUL>
            <div></div>
          </HeaderLists>
          <HeaderMain>
            <MyStorage>
              <MyContent
                color={"#4cd137"}
                icon={"Image"}
                theme={"사진"}
                fnc={"사진 추가"}
                myContents={myContents}
              />
              <MyContent
                color={"#ff4757"}
                icon={"friends"}
                theme={"친구"}
                fnc={"친구 추가"}
                myContents={myFriends}
              />
            </MyStorage>
            <MyContents>
              {myContents.map((content, key) => {
                const {
                  _id,
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
                  <Content
                    key={key}
                    id={_id}
                    contentType={contentType}
                    comments={comments}
                    like={like}
                    view={view}
                    text={text}
                    fileUrl={fileUrl}
                    createdAt={createdAt}
                    nickname={nickname}
                    avatarUrl={avatarUrl}
                  />
                );
              })}
            </MyContents>
          </HeaderMain>
        </ProfileCover>
      </ProfileFrame>
    </>
  );
};
