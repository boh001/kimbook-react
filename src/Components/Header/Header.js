import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faKickstarter } from "@fortawesome/free-brands-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { Avatar3 } from "../Avatar";
import { logout } from "api";
import {
  Header,
  HeaderSearch,
  SearchHome,
  SearchBar,
  BarForm,
  BarInput,
  BarSubmit,
  HeaderUsers,
  HLink,
  UsersJoin,
  UsersLogin
} from "./Header.style";

export default () => {
  const { login, avatarUrl, nickname, id } = JSON.parse(
    localStorage.getItem("user")
  );

  return (
    <Header>
      <HeaderSearch>
        <SearchHome>
          <HLink to={login ? "/me" : "/"}>
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
