import styled from "styled-components";
import { color } from "Components/Global/variable";

export const FriendList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  position: fixed;
  width: 250px;
  height: 100%;
  transition: all ease 0.5s;
  border-left: 1px solid ${color.fbLine};
  cursor: pointer;
  @media screen and (min-width: 1025px) {
    right: 0;
    top: 40px;
  }
  @media only screen and (max-width: 1024px) {
    bottom: 0;
    height: ${props => (props.h ? "200px" : "35px")};
    width: 210px;
    right: 50px;
    border: 1px solid ${color.fbLine};
    background-color: ${color.fbWhite};
    border-radius: ${color.frRa};
    border-bottom: none;
    -webkit-box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12),
      0 1px 2px rgba(0, 0, 0, 0.24);
    -moz-box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12),
      0 1px 2px rgba(0, 0, 0, 0.24);
    -ms-box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    -o-box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    -webkit-transition: all 0.25s ease-in-out;
    -moz-transition: all 0.25s ease-in-out;
    -ms-transition: all 0.25s ease-in-out;
    -o-transition: all 0.25s ease-in-out;
    transition: all 0.25s ease-in-out;
  }
`;
export const Relative = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;
export const ListHeader = styled.div`
  display: none;
  font-size: 15px;
  font-weight: bold;
  padding: 10px 10px 10px 10px;
  &:after {
    content: ${props => `(${props.number})`};
  }
  span {
    margin-left: 1px;
    font-size: 15px;
  }
  @media only screen and (max-width: 1024px) {
    display: flex;
    align-items: center;

    border-bottom: 1px solid ${color.fbLine};
  }
`;
export const ListWrap = styled.div`
  ::-webkit-scrollbar {
    width: 15px;
  }
  ::-webkit-scrollbar-track {
  }
  ::-webkit-scrollbar-thumb {
    background: ${color.fbLightGrey};
    border-radius: 10px;
  }
  overflow: auto;
`;
