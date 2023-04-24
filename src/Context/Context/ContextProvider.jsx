import { GlobalContext } from "./Context";
import { useState } from "react";

//Imports ^^^^^^^^^
/////////////////

/////////////////
//Componet exported VVVVVVVVVV

function ContextProvider({ children }) {
  const [inventory, setinventory] = useState([]);
  const addToInventory = (item) => {
    setinventory([...inventory, item]);
  };
  const removefromInventory = (item) => {};

  return (
    <>
      <GlobalContext.Provider
        value={{ inventory, addToInventory, removefromInventory }}
      >
        {children}
      </GlobalContext.Provider>
    </>
  );
}

export default ContextProvider;
