import styled from "styled-components";
import { color } from "Components/Global/variable";
import { Link } from "react-router-dom";

export const ResultPeople = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 480px;
  height: 150px;
  margin: 20px 0px 20px 0px;
  padding: 10px;
  background-color: ${color.fbWhite};
  border-radius: ${color.frRa};
  -webkit-box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12),
    0 1px 2px rgba(0, 0, 0, 0.24);
  -moz-box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  -ms-box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  -o-box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  -webkit-transition: all 0.25s ease-in-out;
  -moz-transition: all 0.25s ease-in-out;
  -ms-transition: all 0.25s ease-in-out;
  -o-transition: all 0.25s ease-in-out;
  transition: all 0.25s ease-in-out;
  &:hover {
    -webkit-box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19),
      0 6px 6px rgba(0, 0, 0, 0.23);
    -moz-box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19),
      0 6px 6px rgba(0, 0, 0, 0.23);
    -ms-box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19),
      0 6px 6px rgba(0, 0, 0, 0.23);
    -o-box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19),
      0 6px 6px rgba(0, 0, 0, 0.23);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  }
`;
export const PeopleInfo = styled.div`
  margin-left: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 395px;
  height: 100px;
  font-size: 14px;
`;
export const InfoName = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const Name = styled(Link)`
  font-size: 17px;
  color: ${color.fbBlue};
  margin-right: 100px;
`;
export const PlusFriend = styled.div`
  font-size: 13px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 93px;
  background-color: ${color.fbBg};
  border: 1px solid ${color.fbBg};
  border-radius: 2px;
  margin-left: 5px;
  cursor: pointer;
  &:hover {
    background-color: #d9dce0;
  }
`;
export const InfoFriend = styled.div`
  display: flex;
`;
