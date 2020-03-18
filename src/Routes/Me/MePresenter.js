import React from "react";
import Header from "Components/Header/Header";
import ContentFrame from "Components/ContentFrame/ContentFrame";
import FriendChat from "Components/FriendChat/FriendChat";
import MainFrame from "Components/Frame";
export default () => {
  return (
    <>
      <Header />
      <MainFrame>
        <>
          <ContentFrame />
          <FriendChat />
        </>
      </MainFrame>
    </>
  );
};
