import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { color } from "../../Components/variable";
import { Link } from "react-router-dom";
const MainHome = styled.div`
  margin: 0px 10px 0px 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const HomeLogin = styled.form.attrs({
  action: "/login",
  method: "post"
})`
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
  border: 1px solid #1877f2;
  background-color: #1877f2;
  border-radius: ${color.frRa};
  font-size: 20px;
  font-weigth: bold;
  color: white;
`;
const FindPwd = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  width: 350px;
  color: #1877f2;
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
  background-color: #36a420;
  text-decoration: none;
  font-size: 15px;
`;
const HomePresenter = ({ login }) => (
  <MainHome>
    {(login && <div>hi</div>) || (
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
    )}
  </MainHome>
);

export default HomePresenter;
