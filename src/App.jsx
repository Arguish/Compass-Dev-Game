import { BrowserRouter } from "react-router-dom";
import Public from "./Routes/Public/Public";
import ContextProvider from "./Context/Context/ContextProvider";
import "./App.css";
import HomeButton from "./Components/HomeButton/HomeButton";
import NavBar from "./Components/NavBar/NavBar";

function App() {
  return (
    <div
      style={{
        height: "95vh",
        width: "95vw",
        display: "grid",
        alignItems: "center",
        justifyContent: "stretch",
        alignContent: "space-between",
        padding: "0px",
        margin: "0px ",
      }}
    >
      <ContextProvider>
        <BrowserRouter>
          <NavBar></NavBar>
          <div
            style={{
              height: "83vh",
              width: "95vw",
              overflow: "scroll",
              display: "grid",
              alignItems: "center",
            }}
          >
            <Public> </Public>
          </div>
          <HomeButton></HomeButton>
        </BrowserRouter>
      </ContextProvider>
    </div>
  );
}

export default App;
