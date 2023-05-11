import React, { useEffect, useState } from "react";

const width = 8;

class Gem {
  constructor(id, x, y) {
    this.id = id;
    this.x = x;
    this.y = y;
    this.state = "";
    this.color = this.setColor();
  }

  setColor() {
    const candyColors = ["blue", "orange", "purple", "red", "yellow", "green"];
    return candyColors[Math.floor(Math.random() * candyColors.length)];
  }
}

const createBoard = (num) => {
  const result = [];
  for (let i = 0; i < num; i++) {
    for (let j = 0; j < num; j++) {
      result.push(new Gem(j * num + i, j, i));
    }
  }
  return result;
};

const dropGem = (array) => {
  const result = [];
  for (let i = 0; i < width; i++) {
    let black = [];
    const column = array.filter((a) => a.y === i);
    const color = column
      .map((a) => (a.color === "black" ? black.push(a) : a))
      .filter((b) => typeof b !== "number");
    console.log(column);
    console.log(black);
    console.log(color);
    result.push(...[...black, ...color]);
  }
  console.log(result);
  return result;
};

const gemCheck = (array, control) => {
  let render = false;
  for (let i = 0; i < width; i++) {
    for (let j = 0; j < width; j++) {
      const [gemA] = array.filter((a) => a.x === i - 1 && a.y === j);
      const [gemB] = array.filter((a) => a.x === i && a.y === j);
      const [gemC] = array.filter((a) => a.x === i + 1 && a.y === j);
      const [gemD] = array.filter((a) => a.x === i && a.y === j - 1);
      const [gemE] = array.filter((a) => a.x === i && a.y === j + 1);
      /*       console.log("======");
      console.log(gemA ? gemA.color : "null");
      console.log(gemB ? gemB.color : "null");
      console.log(gemC ? gemC.color : "null");
      console.log("======"); */
      if (
        (gemA ? gemA.color : "null") === (gemB ? gemB.color : "null") &&
        (gemC ? gemC.color : "null") === (gemB ? gemB.color : "null")
      ) {
        console.log("TRIO");
        array[gemA.id].state = "X";
        array[gemB.id].state = "X";
        array[gemC.id].state = "X";
        array[gemA.id].color = "black";
        array[gemB.id].color = "black";
        array[gemC.id].color = "black";
        console.log(array[gemB.id].color);
        render = true;
      }
      if (
        (gemD ? gemD.color : "null") === (gemB ? gemB.color : "null") &&
        (gemE ? gemE.color : "null") === (gemB ? gemB.color : "null")
      ) {
        console.log("TRIO");
        array[gemD.id].state = "X";
        array[gemB.id].state = "X";
        array[gemE.id].state = "X";
        array[gemD.id].color = "black";
        array[gemB.id].color = "black";
        array[gemE.id].color = "black";
        console.log(array[gemB.id].color);
        render = true;
      }
    }
  }
  return render ? !control : control;
};

const Emerald = () => {
  const [board, setboard] = useState(createBoard(width));
  const [shouldRender, setshouldRender] = useState(false);
  console.log(board);
  useEffect(() => {
    console.log(board);
    setshouldRender(gemCheck(board, shouldRender));
    setboard(dropGem(board));
    console.log(board);
  }, []);

  return (
    <div style={grid}>
      {board.map((a, i) => (
        <h1
          draggable
          key={i}
          style={{
            ...gemStyle,
            gridArea: `${a.y + 1}/${a.x + 1}/${a.y + 2}/${a.x + 2}/`,
            backgroundColor: a.color,
          }}
        >
          {a.state}
        </h1>
      ))}
    </div>
  );
};

export default Emerald;

const grid = {
  margin: "0px auto",
  width: "50vw",
  height: "50vw",
  display: "grid",
  gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr ",
};

const gemStyle = {
  padding: "0px",
  textAlign: "center",
  color: "black",
  userSelect: "none",
  borderRadius: "40%",
  boxShadow: "2px 2px 2px 2px #21212199",
  margin: "3px",
  border: "2px solid white",
};
