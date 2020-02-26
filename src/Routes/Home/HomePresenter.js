import React, { useContext } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { color } from "Components/variable";
import { Link } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import Header from "Components/Header";
import ContentFrame from "Components/ContentFrame";
import FriendChat from "Components/FriendChat";
import MainFrame from "Components/Frame";
import { useUser } from "store";
const GlobalStyles = createGlobalStyle`
  html{
    background-color:${color.fbWhite};

}`;
const MainHome = styled.div`
  margin: 0px 10px 0px 10px;
  display: flex;
  height: 1100px;
  justify-content: center;
  align-items: center;
`;
const HomeTheme = styled.div`
  display: flex;
  width: 500px;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  margin-right: 50px;
`;
const ThemeMain = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  font-size: 35px;
  font-weight: bold;
  color: ${color.fbLightBlue};
  margin-bottom: 50px;
`;

const ThemeUl = styled.ul`
  padding-left: 20px;
  list-style-type: circle;
  font-size: 20px;
  margin-bottom: 30px;
`;
const UlSpan = styled.div`
  margin-bottom: 15px;
`;
const UlLi = styled.li`
  margin-top: 5px;
  font-size: 15px;
`;
const HomeLogin = styled.form.attrs({
  action: "/login",
  method: "post"
})`
  display: flex;
  width: 500px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 20px;
  background-color: ${color.fbWhite};
  border-radius: ${color.frRa};
`;
const LoginId = styled.input.attrs({
  type: "text",
  name: "nickname",
  placeholder: "아이디를 입력하세요",
  required: true
})`
  width: 350px;
  height: 40px;
  border: 1px solid ${color.fbBg};
  border-radius: ${color.frRa};
  padding-left: 20px;
`;
const LoginPwd = styled.input.attrs({
  type: "password",
  name: "password",
  placeholder: "비밀번호를 입력하세요",
  required: true
})`
  width: 350px;
  height: 40px;
  border: 1px solid ${color.fbBg};
  border-radius: ${color.frRa};
  padding-left: 20px;
`;
const Wrap = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  align-items: 20px;
  margin-bottom: 20px;
`;
const Label = styled.div`
  display: flex;
  width: 80px;
  justify-content: flex-start;
  align-items: center;
  font-size: 15px;
  margin-bottom: 10px;
`;
const LoginSubmit = styled.input.attrs({
  type: "submit",
  value: "로그인"
})`
  margin-top: 20px;
  width: 350px;
  cursor: pointer;
  height: 40px;
  border: 1px solid ${color.fbLightBlue};
  background-color: ${color.fbLightBlue};
  border-radius: ${color.frRa};
  font-size: 20px;
  font-weight: bold;
  color: white;
`;
const FindPwd = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  width: 350px;
  color: ${color.fbLightBlue};
  text-decoration: none;
`;
const Line = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const HrLine = styled.hr`
  width: 153px;
  border: 1px solid ${color.fbBg};
  margin: 0px 10px 0px 10px;
`;
const HrText = styled.span`
  font-size: 13px;
`;
const HomeJoin = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  width: 130px;
  height: 44px;
  color: white;
  border-radius: ${color.frRa};
  background-color: ${color.fbGreen};
  text-decoration: none;
  font-size: 15px;
`;

const HomePresenter = () => {
  const { login } = JSON.parse(localStorage.getItem("user"));
  return (
    <>
      {login ? (
        <>
          <Header />
          <MainFrame>
            <>
              <ContentFrame />
              <FriendChat />
            </>
          </MainFrame>
        </>
      ) : (
        <MainHome>
          <>
            <GlobalStyles />
            <HomeTheme>
              <ThemeMain>Kimbook(Facebook Clone)</ThemeMain>
              <ThemeUl>
                <UlSpan>Programming Language</UlSpan>
                <UlLi>Backend : NodeJS(Express)</UlLi>
                <UlLi>FrontEnd : ReactJS</UlLi>
              </ThemeUl>
              <ThemeUl>
                <UlSpan>Function</UlSpan>
                <UlLi>Upload Contents</UlLi>
                <UlLi>Like Button</UlLi>
                <UlLi>Find Friends</UlLi>
                <UlLi>Comment</UlLi>
                <UlLi>Realtime Chat(socket.io)</UlLi>
              </ThemeUl>
              <ThemeUl>
                <UlSpan>Hosting</UlSpan>
                <UlLi>Server : Heroku</UlLi>
                <UlLi>DB : MongoAtlas</UlLi>
                <UlLi>Storage : AWS-s3</UlLi>
              </ThemeUl>
            </HomeTheme>
            <HomeLogin>
              <Wrap>
                <Label>아이디</Label>
                <LoginId></LoginId>
              </Wrap>
              <Wrap>
                <Label>비밀번호</Label>
                <LoginPwd></LoginPwd>
              </Wrap>
              <LoginSubmit></LoginSubmit>
              <FindPwd to="/find">계정을 잊으셨나요?</FindPwd>
              <Line>
                <HrLine />
                <HrText>또는</HrText>
                <HrLine />
              </Line>
              <HomeJoin to="/join">새 계정 만들기</HomeJoin>
            </HomeLogin>
          </>
        </MainHome>
      )}
    </>
  );
};

export default HomePresenter;
