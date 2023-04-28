import React, { useState } from "react";
import HomeButton from "../../../Components/HomeButton/HomeButton";
import { Hero } from "./HeroClass/HeroClass";

function NewHero() {
  const [name, setname] = useState("");
  const setKeyName = (str) => {
    return str.replaceAll(" ", "_").replaceAll(".", "_");
  };

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
          id=""
        />
      </label>
      <button
        onClick={() =>
          localStorage.setItem(setKeyName(name), JSON.stringify(new Hero(name)))
        }
      >
        Create
      </button>
      <HomeButton></HomeButton>
    </div>
  );
}

export default NewHero;
