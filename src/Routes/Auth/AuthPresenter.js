import React from "react";
import styled from "styled-components";
import Header from "Components/Header/Header";
import { color } from "Components/Global/variable";
const HomeFrame2 = styled.div`
  margin: 0px 10px 0px 10px;
  display: flex;
  height: 950px;
  justify-content: center;
  align-items: center;
`;
const HomeAuth = styled.div`
  display: flex;
  margin-top: 80px;
  width: 500px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 20px;
  background-color: ${color.fbWhite};
  border-radius: ${color.frRa};
  -webkit-box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12),
    0 1px 2px rgba(0, 0, 0, 0.24);
  -moz-box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  -ms-box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  -o-box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  -webkit-transition: all 0.25s ease-in-out;
  -moz-transition: all 0.25s ease-in-out;
  -ms-transition: all 0.25s ease-in-out;
  -o-transition: all 0.25s ease-in-out;
  transition: all 0.25s ease-in-out;
`;
const AuthMent = styled.div`
  font-size: 25px;
  font-weight: bold;
  width: 100%;
`;
const AuthCheck = styled.div`
  margin-top: 20px;
  width: 100%;
`;
const LoginPresenter = ({ verify }) => (
  <>
    <Header />
    <HomeFrame2>
      <HomeAuth>
        <AuthMent>이메일 인증</AuthMent>
        {verify ? (
          <AuthCheck>인증에 성공하였습니다</AuthCheck>
        ) : (
          <AuthCheck>인증에 실패하였습니다</AuthCheck>
        )}
      </HomeAuth>
    </HomeFrame2>
  </>
);
export default LoginPresenter;
