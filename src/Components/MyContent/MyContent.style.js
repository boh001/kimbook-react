import styled from "styled-components";
import { color } from "Components/variable";

export const Wrap = styled.div`
  width: 100%;
  height: 100%;
`;
export const Img = styled.img.attrs(props => ({
  src: props.url
}))`
  width: 100%;
  height: 100%;
`;
export const Name = styled.div`
  font-size: 13px;

  width: 100%;
  height: 100%;
`;

export const Storage = styled.div`
  display: grid;
  grid-template-rows: 1fr 6fr;
  grid-auto-columns: 1fr;
  background-color: white;
  width: 100%;
  height: 100%;
  border: 1px solid ${color.fbLine};
  padding: 5px;
  margin-bottom: 15px;
`;
export const StorageHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  padding: 0px 5px 0px 5px;
`;
export const StorageBody = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-gap: 5px;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
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
export const StorageFnc = styled.div`
  font-size: 13px;
`;
