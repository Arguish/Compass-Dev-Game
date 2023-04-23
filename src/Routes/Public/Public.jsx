import { Route, Routes } from "react-router-dom";
import Home from "../../Pages/Home/Home";
import Shop from "../../Pages/Screen/Shop/Shop";

function Public() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/Shop" element={<Shop></Shop>}></Route>
      </Routes>
    </>
  );
}

export default Public;
