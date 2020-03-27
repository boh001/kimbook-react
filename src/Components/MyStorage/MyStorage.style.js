import styled from "styled-components";
import { color } from "Components/Global/variable";
import { Link } from "react-router-dom";

export const Wrap = styled.div`
  width: 100%;
  height: 100%;
`;
export const Img = styled.img.attrs(props => ({
  src: props.url
}))`
  width: 100%;
  height: ${props => props.h};
`;
export const Name = styled.div`
  font-size: 13px;

  width: 100%;
  height: 20%;
`;

export const Storage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background-color: white;
  width: 100%;
  height: 500px;
  border: 1px solid ${color.fbLine};
  padding: 5px;
  margin-bottom: 15px;
`;
export const StorageHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 10%;
  padding: 0px 5px 5px 5px;
`;
export const StorageBody = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-gap: 5px;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 143px;
`;
export const StorageWrap = styled.div`
  width: 100%;
  height: 90%;
`;
export const HeaderWrap = styled.div`
  display: flex;
  align-items: center;
`;
export const ImgWrap = styled.div`
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background-color: ${props => props.color};
  margin-right: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.color};
  color: white;
`;
export const HeaderTheme = styled.div`
  font-size: 18px;
`;
export const StorageFnc = styled(Link)`
  font-size: 13px;
  color: ${color.fbLightBlue};
  &:hover {
    text-decoration: underline;
  }
`;
