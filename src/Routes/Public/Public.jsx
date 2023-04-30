import { Route, Routes } from "react-router-dom";
import Home from "../../Pages/Home/Home";
import Test from "../../Pages/Test/Test";
import Shop from "../../Pages/Screen/Shop/Shop";
import Continue from "../../Pages/Screen/NewHero/Continue/Continue";
import Options from "../../Pages/Screen/Options/Options.jsx";
import Inventory from "../../Pages/Screen/Inventory/Inventory.jsx";
import HeroPage from "../../Pages/Screen/HeroPage/HeroPage.jsx";
import Land from "../../Pages/Screen/Land/Land.jsx";
import Mission from "../../Pages/Screen/Mission/Mission.jsx";

function Public() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/Test" element={<Test></Test>}></Route>
        <Route path="/Mission" element={<Mission></Mission>}></Route>
        <Route path="/Land" element={<Land></Land>}></Route>
        <Route path="/HeroPage" element={<HeroPage></HeroPage>}></Route>
        <Route path="/Inventory" element={<Inventory></Inventory>}></Route>
        <Route path="/Continue" element={<Continue></Continue>}></Route>
        <Route path="/Shop" element={<Shop></Shop>}></Route>
        <Route path="/Options" element={<Options></Options>}></Route>
      </Routes>
    </div>
  );
}

export default Public;
