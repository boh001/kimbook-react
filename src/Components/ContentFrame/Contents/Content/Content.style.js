import styled from "styled-components";
import { color } from "Components/Global/variable";
import { Link } from "react-router-dom";

export const ContentWrap = styled.div.attrs(props => {
  return {
    id: props.ID
  };
})`
  display: grid;
  grid-auto-rows: auto;
  grid-auto-columns: 500px;
  margin-bottom: 30px;
  border-radius: ${color.frRa};
  border: 1px solid ${color.fbLine};
  background-color: ${color.fbWhite};
`;
export const ContentInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 10px;
  font-weight: bold;
  font-size: 15px;
`;
export const InfoAuthor = styled(Link)`
  display: flex;
  align-items: center;
  color: black;
  &:visited {
    color: black;
  }
`;
export const AuthorName = styled.div`
  margin-left: 10px;
`;
export const ContentImage = styled.img.attrs(props => {
  return {
    src: props.src
  };
})`
  width: 100%;
  background-color: pink;
`;
export const ContentVideo = styled.video.attrs(props => {
  return {
    src: props.src,
    type: props.type,
    controls: true
  };
})`
  width: 100%;
  background-color: pink;
`;
export const ContentText = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 10px 10px 10px;
`;
export const ContentReact = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 10px 10px 10px;
  font-size: 15px;
`;
export const ReactLike = styled.div`
  display: flex;
  align-items: center;
`;
export const LikeIcon = styled.div`
  margin-right: 5px;
`;
export const LikeCount = styled.div``;
export const ReactInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const InfoReply = styled.div`
  margin-right: 5px;
`;

export const ContentAction = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  padding: 2px;
  font-size: 20px;
  border-top: 1px solid ${color.fbLine};
  border-bottom: 1px solid ${color.fbLine};
`;
export const Action = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 100%;
  height: 44px;
`;
export const ActionIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  color: ${props => props.initColor};
  &:hover {
    background-color: ${color.fbBg};
  }
`;
export const LikeBtn = styled.div``;
export const ReplyBtn = styled.div``;
export const ShareBtn = styled.div``;
