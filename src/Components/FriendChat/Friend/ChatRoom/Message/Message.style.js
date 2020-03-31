import styled from "styled-components";
import { color } from "Components/Global/variable";
export const MessageFrame = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: ${props => (props.who ? "flex-end;" : "flex-start")};
  align-items: center;
  font-size: 15px;
  padding: 10px 10px;
`;
export const MessageDes = styled.div`
  width: auto;
  margin-left: 10px;
  background-color: ${color.fbBg};
  height: 60%;
  padding: 10px 10px;
  display: flex;
  align-items: center;
  border-radius: 10px;
`;
