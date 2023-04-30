import React from "react";
import { NavLink } from "react-router-dom";

function Options() {
  return (
    <div>
      <h1>Options</h1>
      <button onClick={() => console.log(localStorage)}>Log Memory</button>
      <button onClick={() => localStorage.clear()}>Clear Memory</button>
      <NavLink to="/Test">
        <button>Test</button>
      </NavLink>
    </div>
  );
}

export default Options;
