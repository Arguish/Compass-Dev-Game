import React, { useContext } from "react";
import HomeButton from "../../../Components/HomeButton/HomeButton";
import { GlobalContext } from "../../../Context/Context/Context";

function HeroPage() {
  const { ActiveHero, setActiveHero } = useContext(GlobalContext);
  return (
    <>
      {ActiveHero.id}
      <h1 className="">Hello world</h1>
      <HomeButton></HomeButton>
    </>
  );
}

export default HeroPage;
