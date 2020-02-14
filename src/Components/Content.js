import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { color } from "./variable";
import { Link } from "react-router-dom";
import { Avatar2 } from "./Avatar";
const ContentFilter = styled.div`
  flex: none;
  top: 40px;
  left: 0;
  width: 300px;
  height: 100vh;
  border: 1px solid ${color.fbLine};
`;
const ContentFrame = styled.div`
  display: flex;
  flex: none;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  width: 500px;
  height: 100vh;
  margin: 0px 15px 0px 15px;
`;
const MakerForm = styled.form.attrs({
  action: "/",
  method: "post",
  encType: "multipart/form-data"
})`
  width: 100%;
  height: 160px;
  margin-top: 15px;
`;
const ContentMaker = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid ${color.fbLine};
  width: 100%;
  height: 100%;
  background-color: ${color.fbWhite};
  border-radius: ${color.frRa};
`;
const MakerName = styled.div`
  display: flex;
  align-items: center;
  padding-left: 10px;
  font-size: 12px;
  font-weight: bold;
  height: 20%;
  width: 100%;
  background-color: ${color.fbLightWhite};
  border-bottom: 1px solid ${color.fbLine};
`;
const FormText = styled.div`
  display: flex;
  align-items: center;
  margin: 0px 15px 0px 15px;
  height: 50%;
  width: 90%;
  border-bottom: 1px solid ${color.fbLine};
`;
const TextAvatar = styled(Link)``;
const TextInput = styled.input.attrs(props => ({
  type: "text",
  name: "text",
  placeholder: `${props.nickname}님, 무슨 생각을 하고 계신가요?`
}))`
  border: none;
  padding-left: 20px;
  width: 98.6%;
  height: 60px;
  font-size: 15px;
`;
const FormStatic = styled.div``;
const StaticInput = styled.input.attrs({
  type: "file",
  name: "content"
})`
  position: absolute;
  width: 100px;
  height: 100px;
  padding: 0;

  border: 0;
`;
const StaticLabel = styled.label`
  display: inline-block;
  padding: 0.5em 0.75em;
  color: #fff;
  font-size: inherit;
  line-height: normal;
  vertical-align: middle;
  background-color: #5cb85c;
  cursor: pointer;
  border: 1px solid #4cae4c;
  border-radius: 0.25em;
`;
const Content = ({ nickname, avatarUrl }) => (
  <>
    <ContentFilter>
      <div>hi</div>
    </ContentFilter>
    <ContentFrame>
      <MakerForm>
        <ContentMaker>
          <MakerName>게시물 만들기</MakerName>
          <FormText>
            <TextAvatar to="/login">
              <Avatar2 avatarUrl={avatarUrl} />
            </TextAvatar>
            <TextInput nickname={nickname} />
          </FormText>
          <FormStatic>
            <StaticLabel>업로드</StaticLabel>
            <StaticInput />
          </FormStatic>
        </ContentMaker>
      </MakerForm>
    </ContentFrame>
  </>
);

export default Content;
