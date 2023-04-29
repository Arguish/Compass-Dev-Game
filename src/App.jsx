import { BrowserRouter } from "react-router-dom";
import Public from "./Routes/Public/Public";
import ContextProvider from "./Context/Context/ContextProvider";
import "./App.css";
import HomeButton from "./Components/HomeButton/HomeButton";
import NavBar from "./Components/NavBar/NavBar";

function App() {
  return (
    <>
      <ContextProvider>
        <BrowserRouter>
          <NavBar></NavBar>
          <Public> </Public>
          <HomeButton></HomeButton>
        </BrowserRouter>
      </ContextProvider>
    </>
  );
}

export default App;
