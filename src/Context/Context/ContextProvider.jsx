import { GlobalContext } from "./Context";
import { useState } from "react";

function ContextProvider({ children }) {
  const meaning = 42;
  const [inventory, setinventory] = useState([]);
  const addToInventory = (item) => {
    setinventory([...inventory, item]);
  };
  const removefromInventory = (item) => {};

  return (
    <>
      <GlobalContext.Provider
        value={{ meaning, inventory, addToInventory, removefromInventory }}
      >
        {children}
      </GlobalContext.Provider>
    </>
  );
}

export default ContextProvider;
