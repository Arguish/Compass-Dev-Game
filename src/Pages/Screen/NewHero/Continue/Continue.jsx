import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { GlobalContext } from "../../../../Context/Context/Context";
import NewHero from "../NewHero";

const filterPlayers = () => {
  const data = Object.keys(localStorage);
  const result = data.filter((a) => a.includes("saveGame_"));
  console.log(localStorage[result[0]]);
  const filter = result.map((a) => JSON.parse(localStorage[a]));

  return filter;
};

const newGame = () => {
  const data = Object.keys(localStorage);
  const result = data.filter((a) => a.includes("saveGame_"));
  console.log(data);
  return result.length > 0 ? true : false;
};

const CharSelect = (array) => {
  const { ActiveHero, setActiveHero, actualID, setactualID } =
    useContext(GlobalContext);

  return (
    <>
      {array.map((c) => {
        setactualID(c.id + 1);
        return (
          <li key={c.id}>
            <div>
              <NavLink to="/">
                <button
                  onClick={() => {
                    setActiveHero(c);
                  }}
                >
                  <h3>{c.name}</h3>
                  {"GO ->"}
                </button>
              </NavLink>
            </div>
          </li>
        );
      })}
    </>
  );
};

function Continue() {
  const { ActiveHero, setActiveHero } = useContext(GlobalContext);
  console.log(newGame());
  return (
    <>
      {newGame() && (
        <div>
          <h1>Selected</h1>
          <h3>{ActiveHero.id}</h3>
          <h1>Continue</h1>
          <div className="player">
            <ul>{CharSelect(filterPlayers())}</ul>
          </div>
        </div>
      )}
      <NewHero></NewHero>
    </>
  );
}

export default Continue;
