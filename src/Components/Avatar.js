import styled from "styled-components";

export const Avatar1 = styled.img.attrs(props => {
  return { src: props.avatarUrl };
})`
  border-radius: 50%;
  width: 75px;
  height: 75px;
`;
export const Avatar2 = styled.img.attrs(props => {
  return { src: props.avatarUrl };
})`
  border-radius: 50%;
  width: 40px;
  height: 40px;
`;
export const Avatar3 = styled.img.attrs(props => {
  return { src: props.avatarUrl };
})`
  border-radius: 50%;
  width: 30px;
  height: 30px;
`;
export const Avatar4 = styled.img.attrs(props => {
  return { src: props.avatarUrl };
})`
  border-radius: 50%;
  width: 25px;
  height: 25px;
`;
