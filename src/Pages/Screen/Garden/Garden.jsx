import React from "react";

function Garden() {
  const placeholder = (num) => {
    const result = [];
    for (let index = 0; index < num; index++) {
      console.log(index);
      result.push(
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
          className="col-span-2 row-span-4 h-80"
        >
          Plantita: {index}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <button>Recolectar</button>
            <button>Adorno</button>
            <button>Escupir semilla</button>
          </div>
        </div>
      );
    }
    return result;
  };
  return (
    <div className="grid grid-flow-row grid-cols-4">
      <div className="col-span-2 row-span-1 h-20">Inventory</div>

      {placeholder(20)}
    </div>
  );
}

export default Garden;
