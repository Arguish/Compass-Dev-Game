import React, { useState } from "react";
import HomeButton from "../../../Components/HomeButton/HomeButton";
import { Hero } from "./HeroClass/HeroClass";

function NewHero() {
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
      <button
        onClick={() => {
          localStorage.setItem(name, JSON.stringify(new Hero(name)));
          setname("");
        }}
      >
        Create
      </button>
    </div>
  );
}

export default NewHero;
