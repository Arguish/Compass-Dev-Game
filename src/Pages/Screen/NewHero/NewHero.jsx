import React, { useState } from "react";
import HomeButton from "../../../Components/HomeButton/HomeButton";

function NewHero() {
  const [name, setname] = useState("");
  const setKeyName = (str) => {
    return str.replaceAll(" ", "_").replaceAll(".", "_");
  };

  const createPlayer = () => {
    return {
      id: name,
      type: "player",
      inventory: [],
    };
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
          localStorage.setItem(setKeyName(name), JSON.stringify(createPlayer()))
        }
      >
        Create
      </button>
      <HomeButton></HomeButton>
    </div>
  );
}

export default NewHero;
