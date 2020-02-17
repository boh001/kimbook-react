import React, { useContext } from "react";

const Store = React.createContext(null);
const HomeContext = React.createContext("");
export const Home = ({ user, contents, children }) => {
  return (
    <HomeContext.Provider value={{ user, contents }}>
      {children}
    </HomeContext.Provider>
  );
};
export const useUser = () => {
  const { user } = useContext(HomeContext);
  return user;
};
export const useContents = () => {
  const { contents } = useContext(HomeContext);
  return contents;
};
export default Store;
