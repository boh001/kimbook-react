import React from "react";
import styled from "styled-components";
import Headers from "Components/Header";
import { color } from "Components/variable";

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
  margin-top: 40px;
  height: 250px;
  border: 1px solid ${color.fbLine};
`;
const PorfileMain = styled.div``;
const HeaderBg = styled.img.attrs({
  src:
    "https://kimbookreact.s3.ap-northeast-2.amazonaws.com/kim/image/1581935426485"
})`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: 50% 15%;
`;
const HeaderAvatar = styled.img`
  position: absolute;
  top: 140px;
  right: 1660px;
  width: 170px;
  height: 170px;
  border-radius: 50%;
  background-color: white;
`;
const HeaderLists = styled.div`
  display: grid;
  height: 40px;
  grid-template-columns: repeat(7, 1fr);
  border: 1px solid ${color.fbLine};
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
          <div>hi</div>
          <div>hi</div>
          <div>hi</div>
          <div>hi</div>
          <div>hi</div>
          <div>hi</div>
          <div>hi</div>
        </HeaderLists>
      </ProfileCover>
    </ProfileFrame>
  </>
);
