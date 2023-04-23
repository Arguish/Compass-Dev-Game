import { GlobalContext } from "./Context";
import { useState } from "react";

//Imports ^^^^^^^^^
/////////////////
const TEMPLATEPLAYER = {
  id: "User",
  type: "Player",
};
/////////////////
//Componet exported VVVVVVVVVV

function ContextProvider({ children }) {
  localStorage.setItem("Arguish", JSON.stringify(TEMPLATEPLAYER));

  console.log(localStorage.getItem("Arguish"));
  console.log(Object.keys(localStorage));
  console.log(Object.values(localStorage).map((a) => JSON.parse(a)));
  localStorage.setItem("Arguish", JSON.stringify({ alo: "2" }));
  console.log(Object.values(localStorage).map((a) => JSON.parse(a)));
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
