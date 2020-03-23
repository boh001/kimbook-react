import styled from "styled-components";
import { color } from "Components/variable";
import { Link } from "react-router-dom";

export const Comment = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;
export const CommentInfo = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 3px;
`;
export const InfoAuthor = styled.div`
  display: flex;
  justify-content: flex-start;
  ${props => (props.h ? "align-items:flex-start;" : "align-items:center;")};
  min-height: 35px;
  border: 1px solid ${color.fbBg};
  border-radius: 15px;
  padding: 0px 10px 0px 10px;
  background-color: ${color.fbBg};
  font-size: 16px;
  padding: 10px;
  margin-left: 10px;
  width: 90%;
`;
export const AuthorName = styled(Link)`
  color: ${color.fbBlue};
  margin-right: 5px;
  &:visited {
    color: ${color.fbBlue};
  }
`;
export const CommentReact = styled.div`
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
  height: auto;
`;
