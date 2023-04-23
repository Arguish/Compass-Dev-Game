import React, { useState } from "react";

function ShopItem({ itemData, localInflation }) {
  const card = {
    backgroundColor: "#212121aa",
    borderRadius: "20px",
    padding: "10px",
    userSelect: "none",
    fontSize: "13px",
  };
  const img = {
    backgroundImage: itemData.image,
    backgroundSize: "cover",
    width: "250px",
    height: "350px",
    padding: "5px",
    borderRadius: "10px",
  };
  const flex = {
    display: "flex",
    gap: "10px",
    justifyContent: "space-around",
    alingItems: "center",
  };
  const column = {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    justifyContent: "space-between",
    alingItems: "center",
  };

  const [taxes, settaxes] = useState(Number(localInflation));

  const inflation = (num, action) => {
    if (action === "buy") {
      settaxes(num + 0.01);
    } else if (action === "sell") {
      settaxes(num - 0.01);
    }
    if (num < 0.4) {
      settaxes(0.4);
      return;
    }
  };
  const handleBuy = (a, b, c) => {
    inflation(c, "buy");
    console.log(c);
    console.log("Buy: " + a + " Por: " + b + " €");
  };

  const handleSell = (a, b, c) => {
    inflation(c, "sell");
    console.log(c);
    console.log("Sell: " + a + " Por: " + b + " €");
  };
  return (
    <>
      <div style={{ ...img, ...column, overflow: "clip", margin: "10px" }}>
        <div>
          <h3 style={card}>{itemData.name}</h3>
          <div style={{ height: "100px" }}></div>
          <p style={card}>{itemData.description}</p>
        </div>
        <div>
          <hr />
          <div style={flex}>
            <button
              onClick={() => handleBuy(itemData.name, itemData.price, taxes)}
            >
              Buy
              <br />
            </button>
            <div>
              <div style={{ ...card, textAlign: "center" }}>
                {itemData.amount}
              </div>
              <div style={{ ...card, textAlign: "center" }}>
                {Math.round(itemData.price * taxes)}€
              </div>
            </div>
            <button
              onClick={() => handleSell(itemData.name, itemData.price, taxes)}
            >
              Sell
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ShopItem;
