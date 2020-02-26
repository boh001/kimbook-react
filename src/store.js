import React, { useContext } from "react";

const HomeContext = React.createContext();
export const Home = ({ initUser, initContents, children }) => {
  return (
    <HomeContext.Provider value={{ initUser, initContents }}>
      {children}
    </HomeContext.Provider>
  );
};
// export const useUser = () => {
//   const { initUser } = useContext(HomeContext);
//   return initUser;
// };
export const useContents = () => {
  const { initContents } = useContext(HomeContext);
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
