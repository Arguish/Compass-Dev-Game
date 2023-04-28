import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import HomeButton from "../../../Components/HomeButton/HomeButton";
import { GlobalContext } from "../../../Context/Context/Context";
import NewHero from "../NewHero/NewHero";

const filterPlayers = () => {
  const localPlayer = Object.values(localStorage).map((a) => {
    return JSON.parse(a);
  });
  const filter = localPlayer.filter((b) => {
    return b.type === "player";
  });
  return filter;
};

const CharSelect = (array) => {
  const { ActiveHero, setActiveHero } = useContext(GlobalContext);
  return (
    <>
      {array.map((c) => (
        <li key={c.id}>
          <div>
            <NavLink to="/">
              <button
                onClick={() => {
                  setActiveHero(c);
                }}
              >
                <h3>{c.id}</h3>
                {"GO ->"}
              </button>
            </NavLink>
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
        <ul>{CharSelect(filterPlayers())}</ul>
      </div>
      <NewHero></NewHero>
      <HomeButton></HomeButton>
    </>
  );
}

export default Continue;
