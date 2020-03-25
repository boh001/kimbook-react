import styled from "styled-components";
import { color } from "Components/Global/variable";
import { Link } from "react-router-dom";

export const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: ${color.fbBlue};
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  z-index: 99;
`;
export const HeaderSearch = styled.div`
  margin-right: 90px;
  flex: none;
  display: flex;
  align-items: center;
`;
export const SearchHome = styled.div`
  flex: none;
  margin-right: 7px;
`;
export const SearchBar = styled.div``;
export const BarForm = styled.form.attrs({
  action: "/search",
  method: "get"
})`
  width: 385px;
  position: relative;
  flex: none;
  display: flex;
  align-items: center;
`;
export const BarInput = styled.input.attrs({
  type: "text",
  name: "search"
})`
  width: 100%;
  border: 1px solid white;
  border-right: none;
  padding: 2px;
  height: 20px;
  border-radius: 2px 0 0 2px;
  outline: none;
  flex: none;
`;
export const BarSubmit = styled.button.attrs({
  type: "submit",
  value: "click"
})`
  width: 40px;
  height: 20px;
  background: ${color.fbBg};
  border: solid 1px ${color.fbBg};
  text-align: center;
  color: black;
  border-radius: 0 2px 2px 0;
  cursor: pointer;
  font-size: 15px;
  flex: none;
`;
export const HeaderUsers = styled.div`
  display: flex;
  align-items: center;
  font-size: 12px;
  flex: none;
`;
export const HLink = styled(Link)`
  width: 100%;
  font-size: 15px;
  font-weight: bold;
  margin-left: 5px;
  flex: none;
  color: white;
  &:visited {
    color: white;
  }
`;
export const UsersJoin = styled.div`
  display: flex;
  align-items: center;
  margin-right: 10px;
  flex: none;
`;
export const UsersLogin = styled.div``;
