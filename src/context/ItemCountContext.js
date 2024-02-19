import { createContext, useContext, useState } from "react";

const ItemCountContext = createContext();

export const CountProvider = ({ children }) => {
  const [itemCount, setItemCount] = useState(0);

  return (
    <ItemCountContext.Provider value={{itemCount , setItemCount}}> 
      {children}
    </ItemCountContext.Provider>
  );
};

export const useCount = () => {
  return useContext(ItemCountContext);
};
