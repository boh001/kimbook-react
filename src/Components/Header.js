import React, { useState } from "react";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faKickstarter } from "@fortawesome/free-brands-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { color } from "./variable";
import { useUser } from "store";
import { Avatar3 } from "./Avatar";
import { logout } from "./api";

const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: ${color.fbBlue};
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  z-index: 99;
  a:visited {
    color: white;
  }
`;
const HeaderSearch = styled.div`
  margin-right: 90px;
  flex: none;
  display: flex;
  align-items: center;
`;
const SearchHome = styled.div`
  flex: none;
  margin-right: 7px;
`;
const SearchBar = styled.div``;
const BarForm = styled.form.attrs({
  action: "/search",
  method: "get"
})`
  width: 385px;
  position: relative;
  flex: none;
  display: flex;
  align-items: center;
`;
const BarInput = styled.input.attrs({
  type: "text",
  name: "search"
})`
  width: 100%;
  border: 1px solid white;
  border-right: none;
  padding: 2px;
  height: 20px;
  border-radius: 2px 0 0 2px;
  outline: none;
  flex: none;
`;
const BarSubmit = styled.button.attrs({
  type: "submit",
  value: "click"
})`
  width: 40px;
  height: 20px;
  background: ${color.fbBg};
  border: solid 1px ${color.fbBg};
  text-align: center;
  color: black;
  border-radius: 0 2px 2px 0;
  cursor: pointer;
  font-size: 15px;
  flex: none;
`;
const HeaderUsers = styled.div`
  display: flex;
  align-items: center;
  font-size: 12px;
  flex: none;
`;
const HLink = styled(Link)`
  width: 100%;
  font-size: 15px;
  font-weight: bold;
  margin-left: 5px;
  flex: none;
`;
const UsersJoin = styled.div`
  display: flex;
  align-items: center;
  margin-right: 10px;
  flex: none;
`;
const UsersLogin = styled.div``;
export default () => {
  const { login, avatarUrl, nickname, id } = JSON.parse(
    localStorage.getItem("user")
  );

  return (
    <Header>
      <HeaderSearch>
        <SearchHome>
          <HLink to="/">
            <FontAwesomeIcon icon={faKickstarter} size="lg" />
          </HLink>
        </SearchHome>
        <SearchBar>
          <BarForm>
            <BarInput />
            <BarSubmit>
              <FontAwesomeIcon icon={faSearch} />
            </BarSubmit>
          </BarForm>
        </SearchBar>
      </HeaderSearch>
      <HeaderUsers>
        {login ? (
          <>
            <UsersJoin>
              <Avatar3 avatarUrl={avatarUrl} />
              <HLink to={`/profile/${id}`}>{nickname}</HLink>
            </UsersJoin>
            <UsersLogin>
              <HLink
                to="/"
                onClick={() => {
                  logout();
                  return window.location.reload();
                }}
              >
                로그아웃
              </HLink>
            </UsersLogin>
          </>
        ) : (
          <>
            <UsersJoin>
              <HLink to="/join">회원가입</HLink>
            </UsersJoin>
            <UsersLogin>
              <HLink to="/login">로그인</HLink>
            </UsersLogin>
          </>
        )}
      </HeaderUsers>
    </Header>
  );
};
