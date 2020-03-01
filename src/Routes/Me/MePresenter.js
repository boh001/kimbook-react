import React from "react";
import styled from "styled-components";
import { color } from "Components/variable";
import { Link } from "react-router-dom";
import Header from "Components/Header";
import ContentFrame from "Components/ContentFrame";
import FriendChat from "Components/FriendChat";
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
