import { NavLink } from "react-router-dom";

//Components

function Home() {
  return (
    <>
      <div>
        <h1 style={{ textAlign: "center" }}>Menú</h1>
        <div>
          <div className="flex flex-col items-center">
            <NavLink to="/Continue">
              <button>Continue</button>
            </NavLink>
            <NavLink to="/Emerald">
              <button>Emerald</button>
            </NavLink>
            <NavLink to="/Land">
              <button>Land</button>
            </NavLink>
            <NavLink to="/Mission">
              <button>Mission</button>
            </NavLink>
            <NavLink to="/HeroPage">
              <button>HeroPage</button>
            </NavLink>
            <NavLink to="/Inventory">
              <button>Inventario</button>
            </NavLink>
            <NavLink to="/Garden">
              <button>Garden</button>
            </NavLink>
            <NavLink to="/Shop">
              <button>Tienda</button>
            </NavLink>
            <NavLink to="/CustomHook">
              <button>CustomHook</button>
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
