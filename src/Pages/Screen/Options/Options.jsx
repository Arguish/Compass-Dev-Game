import React from "react";
import HomeButton from "../../../Components/HomeButton/HomeButton";

function Options() {
  return (
    <div>
      <h1>Options</h1>
      <button onClick={() => console.log(localStorage)}>Log Memory</button>
      <button onClick={() => localStorage.clear()}>Clear Memory</button>
      <HomeButton></HomeButton>
    </div>
  );
}

export default Options;
