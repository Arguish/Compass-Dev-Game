import React from "react";
import { NavLink } from "react-router-dom";

function HomeButton() {
  return (
    <>
      <hr />
      <div className="container" style={{ textAlign: "center" }}>
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
