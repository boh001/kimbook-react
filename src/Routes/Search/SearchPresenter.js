import React from "react";
import SearchResult from "Components/SearchResult/SearchResult";
import styled from "styled-components";
import Header from "Components/Header/Header";
import FriendChat from "Components/FriendChat/FriendChat";

const SearchResults = styled.div`
  margin: 40px 10px 0px 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export default ({ users, myFriends }) => {
  return (
    <>
      <Header />
      <SearchResults>
        {users.map((user, key) => {
          return <SearchResult key={key} user={user} myFriends={myFriends} />;
        })}
      </SearchResults>
      <FriendChat />
    </>
  );
};
