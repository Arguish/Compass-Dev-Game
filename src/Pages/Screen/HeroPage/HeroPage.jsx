import React, { useContext } from "react";
import HomeButton from "../../../Components/HomeButton/HomeButton";
import { GlobalContext } from "../../../Context/Context/Context";

function HeroPage() {
  const { ActiveHero, setActiveHero } = useContext(GlobalContext);
  return (
    <>
      <div
        style={{ height: "83vh" }}
        className="grid grid-col-4 grid-row-8 h-screen"
      >
        <div className="col-start-1 h-1/8">Abalorio 1</div>
        <div className="col-start-2 row-span-2 h-2/8">Arma 2</div>
        <div className="col-start-3 row-span-2 h-2/8">Arma 3</div>
        <div className="col-start-4 h-1/8">Abalorio 2</div>
        <div className="col-start-1 row-start-2 row-span-2 h-2/8">Arma 1</div>
        <div className="col-start-4 row-start-2 row-span-2 h-2/8">Arma 4</div>
        <div className="col-start-2 row-start-3 row-span-2 col-span-2 h-2/8">
          Aura
        </div>
        <div className="col-start-1 row-start-4 row-span-2 h-2/8">Troso</div>
        <div className="col-start-4 row-start-4 row-span-2 h-2/8">Piernas</div>
        <div className="col-start-2 row-start-5 col-span-1 row-span-2 h-2/8">
          Casco
        </div>
        <div className="col-start-3 row-start-5 col-span-1 row-span-2 h-2/8">
          Botas
        </div>
        <div className="col-start-1 h-1/8">Abalorio 3</div>
        <div className="col-start-4 h-1/8">Abalorio 4</div>
      </div>
    </>
  );
}

export default HeroPage;
