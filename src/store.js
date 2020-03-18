import React, { useContext } from "react";

const MainContext = React.createContext();
export const Main = ({ initUser, initContents, children }) => {
  return (
    <MainContext.Provider value={{ initUser, initContents }}>
      {children}
    </MainContext.Provider>
  );
};
export const useUser = () => {
  const { initUser } = useContext(MainContext);
  return initUser;
};
export const useContents = () => {
  const { initContents } = useContext(MainContext);
  return initContents;
};

const ContentContext = React.createContext();
export const eachContent = ({ content, children }) => {
  return (
    <ContentContext.Provider value={{ content }}>
      {children}
    </ContentContext.Provider>
  );
};
export const useContent = () => {
  console.log(useContext(ContentContext));

  const { content } = useContext(ContentContext);
  return content;
};
