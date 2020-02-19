import React, { useContext } from "react";

const Store = React.createContext(null);
const HomeContext = React.createContext("");
export const Home = ({ user, children }) => {
  return (
    <HomeContext.Provider value={{ user }}>{children}</HomeContext.Provider>
  );
};
export const useUser = () => {
  const { user } = useContext(HomeContext);
  return user;
};

export default Store;
