import { NavLink } from "react-router-dom";

//Components
import HomeButton from "../../Components/HomeButton/HomeButton";

function Home() {
  return (
    <>
      <div className="container">
        <h1 style={{ textAlign: "center" }}>Menú</h1>
        <div>
          <div className="body">
            {" "}
            <NavLink to="/Shop">
              <button>Tienda</button>
            </NavLink>
            <NavLink to="/Inventory">
              <button>Inventario</button>
            </NavLink>
            <NavLink to="/Test">
              <button>Test</button>
            </NavLink>
            <NavLink to="/HeroPage">
              <button>HeroPage</button>
            </NavLink>
            <NavLink to="/Continue">
              <button>Continue</button>
            </NavLink>
            <NavLink to="/Options">
              <button>Options</button>
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
