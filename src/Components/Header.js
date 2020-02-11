import React from "react";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faKickstarter } from "@fortawesome/free-brands-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { color } from "./variable";
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
  a:visited {
    color: white;
  }
`;
const HeaderSearch = styled.div`
  margin-right: 90px;
  display: flex;
  align-items: center;
`;
const SearchHome = styled.div`
  margin-right: 7px;
`;
const SearchBar = styled.div``;
const BarForm = styled.form.attrs({
  action: "/search",
  method: "get"
})`
  width: 385px;
  position: relative;
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
`;
const HeaderUsers = styled.div`
  display: flex;
  align-items: center;
  font-size: 12px;
`;
const HLink = styled(Link)``;
const UsersJoin = styled.div`
  margin-right: 10px;
`;
const UsersLogin = styled.div``;
export default ({ login, nickname, avatarUrl }) => (
  <Header>
    <HeaderSearch>
      <SearchHome>
        <HLink to="/">
          <FontAwesomeIcon icon={faKickstarter} size="lg" />
        </HLink>
      </SearchHome>
      <SearchBar>
        <BarForm>
          <BarInput></BarInput>
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
            <img src={avatarUrl} />
            <HLink to="/join">{nickname}</HLink>
          </UsersJoin>
          <UsersLogin>
            <HLink to="/logout">로그아웃</HLink>
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
