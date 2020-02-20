import React, { useContext, useState } from "react";

const HomeContext = React.createContext();
export const Home = ({ initUser, initContents, children }) => {
  return (
    <HomeContext.Provider value={{ initUser, initContents }}>
      {children}
    </HomeContext.Provider>
  );
};
export const useUser = () => {
  const { initUser } = useContext(HomeContext);
  return initUser;
};
export const useContents = () => {
  const { initContents } = useContext(HomeContext);
  return initContents;
};
