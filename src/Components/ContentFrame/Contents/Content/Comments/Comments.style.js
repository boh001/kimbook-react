import styled from "styled-components";
import { color } from "Components/Global/variable";

export const Comments = styled.div`
  display: none;
  flex-direction: column;
  align-items: center;
  padding: 10px;
`;
export const CommentsUp = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;
export const UpInput = styled.textarea.attrs({
  name: "comment",
  placeholder: "댓글을 입력하세요..."
})`
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
  background-color: ${color.fbBg};
  &:focus {
    outline: none;
  }
`;

export const CommentWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
`;
