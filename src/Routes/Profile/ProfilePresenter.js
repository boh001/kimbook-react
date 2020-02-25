import React from "react";
import styled from "styled-components";
import Headers from "Components/Header";
import { color } from "Components/variable";
import { Link } from "react-router-dom";

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

const HiddenList = styled.div`
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
  div {
    width: 100%;
    &:hover {
      background-color: ${color.fbBg};
    }
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
  &:hover ${HiddenList} {
    visibility: visible;
    opacity: 1;
    transition: all ease 1s;
  }
`;
export default () => (
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
          <ListsUL>타임라인</ListsUL>
          <ListsUL>정보</ListsUL>
          <ListsUL>친구</ListsUL>
          <ListsUL>사진</ListsUL>
          <ListsUL>
            더보기
            <HiddenList>
              <div>책</div>
              <div>좋아요</div>
              <div>이벤트</div>
              <div>음악</div>
              <div>영화</div>
            </HiddenList>
          </ListsUL>
          <div></div>
        </HeaderLists>
      </ProfileCover>
    </ProfileFrame>
  </>
);
