import styled from "styled-components";
import { color } from "Components/variable";

export const ReComment = styled.div`
  margin-top: 10px;
  margin-left: 35px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;
export const ReCommentInfo = styled.div`
  display: flex;
  margin-bottom: 3px;
`;
export const InfoAuthor = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 30px;
  border: 1px solid ${color.fbBg};
  border-radius: 15px;
  padding: 0px 10px 0px 10px;
  background-color: ${color.fbBg};
  font-size: 13px;
  margin-left: 10px;
`;
export const AuthorName = styled.div`
  color: ${color.fbBlue};
  font-size: 13px;
  margin-right: 5px;
`;
export const ReCommentReact = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 11px;
  padding-left: 50px;
`;
export const ReactLike = styled.div`
  margin-right: 3px;
`;
export const ReactShow = styled.div`
  margin-left: 8px;
`;
export const Descr = styled.div`
  max-width: 390px;
  height: auto;
  line-height: normal;
  overflow: hidden;
  overflow-wrap: break-word;
  word-wrap: break-word;
`;
