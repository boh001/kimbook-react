import styled from "styled-components";
import { color } from "Components/Global/variable";
export const RoomFrame = styled.div`
  position: absolute;
  bottom: 50px;
  left: -100px;
  border: 1px solid;
  width: 300px;
  height: 350px;
  display: ${props => (props.active ? "grid ;" : "none")};
  grid-template-rows: 1.5fr 8fr 2fr;
  border: 1px solid ${color.fbLine};
  border-radius: ${color.frRa};
  background-color: ${color.fbWhite};
`;
export const RoomHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 5px 10px;
  border-bottom: 2px solid ${color.fbLine};
  cursor: pointer;
`;
export const HeaderInfo = styled.div`
  display: flex;
  align-items: center;
`;
export const InfoName = styled.div`
  margin-left: 10px;
  font-weight: bold;
`;
export const HeaderClose = styled.div`
  display: flex;
  align-items: center;
  color: ${color.fbLightBlue};
`;
export const RoomMsg = styled.div``;
export const RoomSub = styled.div`
  border-top: 1px solid ${color.fbLine};
`;
export const SubInput = styled.input.attrs({
  type: "text",
  placeholder: "메시지를 입력하세요..."
})`
  width: 100%;
  height: 50%;
  border: none;
  padding: 5px;
`;
