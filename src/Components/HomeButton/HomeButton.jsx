import React from "react";
import { NavLink } from "react-router-dom";
import useSound from "use-sound";

import back from "../../assets/Images/Archivos SRCG/Randomize72.wav";

function HomeButton() {
  const [play] = useSound(back);
  return (
    <div className="mb-0  inset-x-0 bottom-0 flex flex-start">
      <hr />
      <div onClick={() => play()}>
        <NavLink to="/">
          <button>◀◀◀</button>
        </NavLink>
      </div>
    </div>
  );
}

export default HomeButton;
