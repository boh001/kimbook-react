import styled from "styled-components";
import { color } from "../variable";
import { Link } from "react-router-dom";

export const ContentFilter = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
`;
export const FilterList = styled.div`
  position: fixed;
  width: 250px;
  min-height: 100vh;
  border-right: 1px solid ${color.fbLine};
`;
export const ContentFrame = styled.div`
  display: flex;
  flex: none;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  width: 500px;
  min-height: 100vh;
  margin: 0px 15px 0px 15px;
`;
export const MakerForm = styled.form.attrs({
  action: "/make",
  method: "post",
  encType: "multipart/form-data"
})`
  width: 100%;
  height: 160px;
  margin: 15px 15px;
`;
export const ContentMaker = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid ${color.fbLine};
  width: 100%;
  height: 100%;
  background-color: ${color.fbWhite};
  border-radius: ${color.frRa};
`;
export const MakerName = styled.div`
  display: flex;
  align-items: center;
  padding-left: 10px;
  font-size: 12px;
  font-weight: bold;
  height: 20%;
  width: 100%;
  background-color: ${color.fbLightGrey};
  border: 1px solid ${color.fbLine};
  border-right: none;
`;
export const FormText = styled.div`
  display: flex;
  align-items: center;
  margin: 0px 15px 0px 15px;
  height: 50%;
  width: 94.5%;
  border-bottom: 1px solid ${color.fbLine};
`;
export const TextAvatar = styled(Link)``;

export const TextInput = styled.input.attrs(props => ({
  type: "text",
  name: "text",
  placeholder: `${props.nickname}님, 무슨 생각을 하고 계신가요?`
}))`
  word-wrap: break-word;
  width: 90%;
  height: 35px;
  overflow: hidden;
  margin-left: 10px;
  border: none;
  border-radius: 15px;
  padding-left: 15px;
  padding-top: 10px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  &:focus {
    outline: none;
  }
`;

export const StaticLabel = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 11px;
  font-weight: bold;
  text-align: center;
  line-height: normal;
  vertical-align: middle;
  width: 97%;
  height: 80%;
  border: none;
  background-color: ${color.fbLightGrey};
  border-radius: ${color.frSra};
`;
export const StaticInput = styled.input.attrs({
  type: "file",
  name: "content"
})`
  position: absolute;
  font-size: 0px;
  opacity: 0;
  width: 97%;
  cursor: pointer;
  height: 40px;
  border: 1px solid;
  &:hover + ${StaticLabel} {
    background-color: greenyellow;
  }
`;

export const FormStatic = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  height: 30%;
  padding: 3px;
  width: 100%;
`;
