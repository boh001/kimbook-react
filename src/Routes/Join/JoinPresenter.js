import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { color } from "../../Components/variable";
const MainHome = styled.div`
  margin: 0px 10px 0px 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const HomeJoin = styled.form.attrs({
  action: "/join",
  method: "post",
  enctype: "multipart/form-data"
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
const JoinMent = styled.div`
  font-size: 20px;
  margin-bottom: 60px;
`;
const Wrap = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: 20px;
  margin-bottom: 20px;
`;
const Label = styled.div`
  display: flex;
  margin-right: 20px;
  width: 80px;
  justify-content: flex-start;
  align-items: center;
  font-size: 12px;
`;
const JoinName = styled.input.attrs({
  type: "text",
  name: "name",
  placeholder: "Full Name",
  required: true
})`
  width: 350px;
  height: 40px;
  border: 1px solid ${color.fbBg};
  border-radius: ${color.frRa};
  padding-left: 20px;
`;
const JoinNickname = styled.input.attrs({
  type: "text",
  name: "nickname",
  placeholder: "ID",
  required: true
})`
  width: 350px;
  height: 40px;
  border: 1px solid ${color.fbBg};
  border-radius: ${color.frRa};
  padding-left: 20px;
`;
const JoinPwd = styled.input.attrs({
  type: "text",
  name: "password",
  placeholder: "Password",
  required: true
})`
  width: 350px;
  height: 40px;
  border: 1px solid ${color.fbBg};
  border-radius: ${color.frRa};
  padding-left: 20px;
`;
const JoinPwd2 = styled.input.attrs({
  type: "text",
  name: "password2",
  placeholder: "Verify Password",
  required: true
})`
  width: 350px;
  height: 40px;
  border: 1px solid ${color.fbBg};
  border-radius: ${color.frRa};
  padding-left: 20px;
`;

const JoinEmail = styled.input.attrs({
  type: "text",
  name: "email",
  placeholder: "Email",
  required: true
})`
  width: 350px;
  height: 40px;
  border: 1px solid ${color.fbBg};
  border-radius: ${color.frRa};
  padding-left: 20px;
`;

const UploadInput = styled.input.attrs({
  type: "file",
  name: "content",
  accept: "image/*",
  required: true
})`
  border: 1px solid ${color.fbBg};
  border-radius: ${color.frRa};
  width: 82.67px;
  height: 40px;
  font-size: 100px;
  position: absolute;
  left: 0;
  top: 0;
  opacity: 0;
  cursor: pointer;
`;
const JoinSubmit = styled.input.attrs({
  type: "submit",
  value: "가입하기"
})`
  margin-top: 20px;
  width: 350px;
  cursor: pointer;
  height: 40px;
  border: 1px solid #36a420;
  background-color: #36a420;
  border-radius: ${color.frRa};
  color: white;
`;
const UploadWrap = styled.div`
  position: relative;
  overflow: hidden;
  width: 350px;
  height: 40px;
  display: inline-block;
`;
const UploadBtn = styled.button`
  border: 1px solid #36a420;
  color: white;
  background-color: #36a420;
  padding: 8px 20px;
  border-radius: ${color.frRa};
  font-size: 12px;
  font-weight: bold;
  height: 40px;
  cursor: pointer;
`;
const JoinPresenter = () => (
  <MainHome>
    <HomeJoin>
      <>
        <JoinMent>새 계정 만들기</JoinMent>

        <Wrap>
          <>
            <Label>이름</Label>
            <JoinName></JoinName>
          </>
        </Wrap>
        <Wrap>
          <>
            <Label>아이디</Label>
            <JoinNickname></JoinNickname>
          </>
        </Wrap>
        <Wrap>
          <>
            <Label>이메일</Label>
            <JoinEmail></JoinEmail>
          </>
        </Wrap>
        <Wrap>
          <>
            <Label>비밀번호</Label>
            <JoinPwd></JoinPwd>
          </>
        </Wrap>
        <Wrap>
          <>
            <Label>비밀번호 확인</Label>
            <JoinPwd2></JoinPwd2>
          </>
        </Wrap>
        <Wrap>
          <>
            <Label>프로필 사진</Label>
            <UploadWrap>
              <>
                <UploadBtn>Upload</UploadBtn>
                <UploadInput></UploadInput>
              </>
            </UploadWrap>
          </>
        </Wrap>
        <JoinSubmit></JoinSubmit>
      </>
    </HomeJoin>
  </MainHome>
);
export default JoinPresenter;
