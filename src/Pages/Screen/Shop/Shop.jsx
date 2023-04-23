import React from "react";
import HomeButton from "../../../Components/HomeButton/HomeButton";
import ShopItem from "../../../Components/ShopItem/ShopItem";

const itemData1 = {
  image: "url(https://picsum.photos/300/300)",
  name: "Pepinillos",
  description: "Descripcion toda pasada de rosca",
  amount: 10,
  price: 20,
};

const productos = [
  {
    image: "url(https://picsum.photos/300/300)",
    name: "Pepinillos",
    description: "Descripcion toda pasada de rosca",
    amount: 10,
    price: 20,
  },
  {
    image: "url(https://picsum.photos/300/300)",
    name: "Manzanas",
    description: "Frutas frescas y deliciosas",
    amount: 25,
    price: 15,
  },
  {
    image: "url(https://picsum.photos/300/300)",
    name: "Lechugas",
    description: "Verduras crujientes y saludables",
    amount: 20,
    price: 5,
  },
];

function Shop() {
  const taxes = 1.21;
  return (
    <>
      <div
        className="container"
        style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
      >
        {productos.map((product) => {
          return (
            <ShopItem itemData={product} localInflation={taxes}></ShopItem>
          );
        })}
      </div>
      <HomeButton></HomeButton>
    </>
  );
}

export default Shop;
