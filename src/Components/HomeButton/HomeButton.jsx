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
        onClick={() => play()}
        className="container"
        style={{ textAlign: "center" }}
      >
        <NavLink to="/">
          <a href="#" role="button">
            Menú
          </a>{" "}
        </NavLink>
      </div>
    </>
  );
}

export default HomeButton;
