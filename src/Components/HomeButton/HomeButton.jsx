import React from "react";
import { NavLink } from "react-router-dom";
import useSound from "use-sound";

import back from "../../assets/Images/Archivos SRCG/Randomize72.wav";

function HomeButton() {
  const [play] = useSound(back);
  return (
    <>
      <hr />
      <div
        class="bg-purple-600 rounded-full w-20 h-10 m-auto flex-col items-center hover:bg-purple-300"
        onClick={() => play()}
      >
        <NavLink to="/">
          <p href="#" role="button">
            Menú
          </p>{" "}
        </NavLink>
      </div>
    </>
  );
}

export default HomeButton;
