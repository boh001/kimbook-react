import { Avatar1 } from "Components/Avatar";
import React, { useCallback } from "react";
import { apiUpFriend } from "api";
import {
  ResultPeople,
  PeopleInfo,
  InfoName,
  Name,
  PlusFriend,
  InfoFriend
} from "./SearchResult.style";

export default ({ user, myFriends }) => {
  const { _id, avatarUrl, name, nickname, email } = user;

  const upFriend = useCallback(async e => {
    e.preventDefault();
    return await apiUpFriend(_id);
  });
  return (
    <ResultPeople>
      <Avatar1 avatarUrl={avatarUrl} />
      <PeopleInfo>
        <InfoName>
          <Name to={`/profile/${_id}`}>{name}</Name>
          <PlusFriend onClick={e => upFriend(e)}>
            {myFriends.includes(_id) ? <h1>친구</h1> : <h1>친구 추가</h1>}
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
          <h1> 0</h1>
          <h1> 명</h1>
        </InfoFriend>
      </PeopleInfo>
    </ResultPeople>
  );
};
