import React from "react";
import HomeButton from "../../../Components/HomeButton/HomeButton";

function Inventory() {
  const placeholder = (num) => {
    const result = [];
    for (let index = 0; index < num; index++) {
      console.log(index);
      result.push(
        <div className="col-span-2 row-span-2 h-40">Item {index}</div>
      );
    }
    return result;
  };
  return (
    <div className="grid grid-flow-row grid-cols-4">
      <div className="col-span-2 row-span-1 h-20">Inventory</div>
      <div className="col-span-2 row-span-2 h-40 grid grid-cols-4 grid-rows-2">
        <div className="col-span-1">Material comun</div>
        <div className="col-span-1">Material infrecuente</div>
        <div className="col-span-2 row-span-2 h-40">Material gordo</div>
        <div className="col-span-1">Material raro</div>
        <div className="col-span-1">Material muy raro</div>
      </div>

      {placeholder(20)}
    </div>
  );
}

export default Inventory;
