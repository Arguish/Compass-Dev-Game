import React from "react";
import { useContext } from "react";

import { GlobalContext } from "../../Context/Context/Context";

function NavBar() {
  const { ActiveHero } = useContext(GlobalContext);

  return (
    <div className="mt-0 fixed inset-x-0 top-0 flex flex-row justify-around">
      <h3>{ActiveHero.id}</h3>
      <h3>Divisas: {ActiveHero.money}</h3>
    </div>
  );
}

export default NavBar;
