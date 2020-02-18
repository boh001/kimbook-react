import React, { useContext, useState } from "react";

const Store = React.createContext(null);
const HomeContext = React.createContext("");
export const Home = ({ user, atest, contents, children }) => {
  const [like, setLike] = useState(0);
  const [test, setTest] = useState(atest);

  return (
    <HomeContext.Provider value={{ user, setLike, contents }}>
      {children}
    </HomeContext.Provider>
  );
};
export const useUser = () => {
  const { user } = useContext(HomeContext);
  return user;
};
export const useSetLike = () => {
  const { setLike } = useContext(HomeContext);
  return setLike;
};
export const useContents = () => {
  const { contents } = useContext(HomeContext);
  return contents;
};
export default Store;
