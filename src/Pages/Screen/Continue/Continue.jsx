import React, { useContext, useState } from "react";
import HomeButton from "../../../Components/HomeButton/HomeButton";
import { GlobalContext } from "../../../Context/Context/Context";

const filterPlayers = () => {
  const { ActiveHero, setActiveHero } = useContext(GlobalContext);
  const localPlayer = Object.values(localStorage).map((a) => {
    console.log(JSON.parse(a));
    return JSON.parse(a);
  });
  console.log(localPlayer);
  const filter = localPlayer.filter((b) => {
    console.log(b.type);
    return b.type === "player";
  });
  console.log(filter);
  return (
    <>
      {filter.map((c) => (
        <li>
          <div>
            <button onClick={() => setActiveHero(c)}>
              <h3>{c.id}</h3>
              {"GO ->"}
            </button>
          </div>
        </li>
      ))}
    </>
  );
};

function Continue() {
  const { ActiveHero, setActiveHero } = useContext(GlobalContext);

  return (
    <>
      <h1>Selected</h1>
      <h3>{ActiveHero.id}</h3>
      <h1>Continue</h1>
      <div className="player">
        <ul>{filterPlayers()}</ul>
      </div>
      <HomeButton></HomeButton>
    </>
  );
}

export default Continue;
