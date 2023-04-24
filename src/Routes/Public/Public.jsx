import { Route, Routes } from "react-router-dom";
import Home from "../../Pages/Home/Home";
import Test from "../../Pages/Test/Test";
import Shop from "../../Pages/Screen/Shop/Shop";
import NewHero from "../../Pages/Screen/NewHero/NewHero.jsx";
import Options from "../../Pages/Screen/Options/Options.jsx";
import Inventory from "../../Pages/Screen/Inventory/Inventory.jsx";

function Public() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/Test" element={<Test></Test>}></Route>
        <Route path="/Inventory" element={<Inventory></Inventory>}></Route>
        <Route path="/NewHero" element={<NewHero></NewHero>}></Route>
        <Route path="/Shop" element={<Shop></Shop>}></Route>
        <Route path="/Options" element={<Options></Options>}></Route>
      </Routes>
    </>
  );
}

export default Public;
