import React, { useState, useContext } from "react";
import HomeButton from "../../../Components/HomeButton/HomeButton";
import { Hero } from "./HeroClass/HeroClass";
import { NavLink } from "react-router-dom";
import { GlobalContext } from "../../../Context/Context/Context";

function NewHero() {
  const { ActiveHero, setActiveHero, actualID, setactualID } =
    useContext(GlobalContext);
  const [name, setname] = useState("");

  return (
    <div>
      NewHero
      <label htmlFor="name">
        Nombre: {name}
        <input
          onChange={(e) => {
            setname(e.target.value);
          }}
          type="text"
          name="name"
          value={name}
          id=""
        />
      </label>
      <NavLink to="/">
        <button
          onClick={() => {
            localStorage.setItem(
              `saveGame_${actualID}`,
              JSON.stringify(new Hero(actualID, name))
            );
            setactualID(actualID + 1);
            setActiveHero(JSON.parse(localStorage.getItem(name)));
            setname("");
          }}
        >
          Create
        </button>
      </NavLink>
    </div>
  );
}

export default NewHero;
