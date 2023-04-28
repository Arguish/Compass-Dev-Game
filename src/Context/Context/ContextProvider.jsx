import { GlobalContext } from "./Context";
import { useState, useEffect } from "react";

//Imports ^^^^^^^^^
/////////////////

/////////////////
//Componet exported VVVVVVVVVV

function ContextProvider({ children }) {
  const [ActiveHero, setActiveHero] = useState({});
  useEffect(() => {
    ActiveHero.savedtimes++;
    console.log(ActiveHero.id);
    console.log(": save game");
    localStorage.setItem(ActiveHero.id, JSON.stringify(ActiveHero));
  }, [ActiveHero]);

  return (
    <>
      <GlobalContext.Provider value={{ ActiveHero, setActiveHero }}>
        {children}
      </GlobalContext.Provider>
    </>
  );
}

export default ContextProvider;
