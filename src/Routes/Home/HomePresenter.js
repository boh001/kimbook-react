import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
const MainHome = styled.div`
  margin: 0px 10px 0px 10px;
  display: flex;
  flex-direction: column;
`;
const HomePresenter = ({ users }) => (
  <MainHome>
    <>
      <div>hi</div>
      <div>{users}</div>
    </>
  </MainHome>
);

export default HomePresenter;
