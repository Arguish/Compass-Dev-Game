import { GlobalContext } from "./Context";
import { useState } from "react";

//Imports ^^^^^^^^^
/////////////////

/////////////////
//Componet exported VVVVVVVVVV

function ContextProvider({ children }) {
  const [ActiveHero, setActiveHero] = useState({});

  return (
    <>
      <GlobalContext.Provider value={{ ActiveHero, setActiveHero }}>
        {children}
      </GlobalContext.Provider>
    </>
  );
}

export default ContextProvider;
