import React, { useEffect, useState } from "react";

const width = 8;
const candyColors = ["blue", "orange", "purple", "red", "yellow", "green"];
const rndColor = () =>
  candyColors[Math.floor(Math.random() * candyColors.length)];

class Gem {
  constructor(id, x, y) {
    this.id = id;
    this.x = x;
    this.y = y;
    this.color = this.setColor();
  }

  setColor() {
    return rndColor();
  }
}

const createBoard = (num) => {
  const result = [];
  for (let i = 0; i < num; i++) {
    for (let j = 0; j < num; j++) {
      result.push(new Gem(i * num + j, i, j));
    }
  }
  return result;
};

const Emerald = () => {
  console.log(createBoard(width));
  return (
    <div
      style={{
        margin: "0px auto",
        width: "50vw",
        height: "50vw",
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr ",
      }}
    >
      {createBoard(width).map((a) => (
        <h1
          draggable
          style={{
            backgroundColor: a.color,
            gridArea: `${a.y + 1}/${a.x + 1}/${a.y + 2}/${a.x + 2}/`,
            textAlign: "center",
            color: "black",
            userSelect: "none",
          }}
        >
          {a.id}
        </h1>
      ))}
    </div>
  );
};

export default Emerald;
