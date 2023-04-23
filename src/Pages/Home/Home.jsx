import { NavLink } from "react-router-dom";

//Components
import HomeButton from "../../Components/HomeButton/HomeButton";

function Home() {
  return (
    <>
      <div className="container">
        <h1 style={{ textAlign: "center" }}>Menú</h1>
        <div className="grid">
          <div>
            {" "}
            <NavLink to="/Shop">
              <button>Tienda</button>
            </NavLink>
          </div>
        </div>
        <HomeButton></HomeButton>
      </div>
    </>
  );
}

export default Home;
