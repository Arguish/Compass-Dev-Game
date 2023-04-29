import React from "react";
import { NavLink } from "react-router-dom";
import useSound from "use-sound";

import back from "../../assets/Images/Archivos SRCG/Randomize72.wav";

function HomeButton() {
  const [play] = useSound(back);
  return (
    <>
      <hr />
      <div onClick={() => play()}>
        <NavLink to="/">
          <button>Menú</button>{" "}
        </NavLink>
      </div>
    </>
  );
}

export default HomeButton;
