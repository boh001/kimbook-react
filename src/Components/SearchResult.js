import styled from "styled-components";
import { color } from "Components/variable";
import { Avatar1 } from "./Avatar";
import React from "react";

const ResultPeople = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 480px;
  height: 150px;
  margin: 20px 0px 20px 0px;
  padding: 10px;
  background-color: ${color.fbWhite};
  border-radius: ${color.frRa};
`;
const PeopleInfo = styled.div`
  margin-left: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 395px;
  height: 100px;
  font-size: 14px;
`;
const InfoName = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Name = styled.h1`
  font-size: 17px;
  color: ${color.fbBlue};
  margin-right: 100px;
`;
const PlusFriend = styled.button`
  font-size: 13px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 93px;
  border: 1px solid ${color.fbBg};
  border-radius: 2px;
  margin-left: 5px;
  cursor: pointer;
  &:hover {
    background-color: #d9dce0;
  }
`;
const InfoFriend = styled.div`
  display: flex;
`;

export default ({ user }) => {
  const { avatarUrl, name, nickname, email } = user;
  const upFriend = 1;
  return (
    <ResultPeople>
      <Avatar1 avatarUrl={avatarUrl} />
      <PeopleInfo>
        <InfoName>
          <Name>{name}</Name>
          <PlusFriend onClick={e => upFriend(e)}>
            <h1>친구 추가</h1>
          </PlusFriend>
        </InfoName>
        <div>
          <h1>{nickname}</h1>
        </div>
        <div>
          <h1>{email}</h1>
        </div>
        <InfoFriend>
          <h1>함께 아는 친구</h1>
          <h1>0</h1>
          <h1>명</h1>
        </InfoFriend>
      </PeopleInfo>
    </ResultPeople>
  );
};
