import React from "react";

function Land() {
  return (
    <>
      <div style={{ height: "83vh" }} className="grid h-screen">
        <div className="col-start-1 row-start-1 col-span-3 row-span-5">
          Mision principal
        </div>
        <div className="col-start-4 row-start-1 col-span-1 row-span-1">
          Recursos pasivos
        </div>
        <div className="col-start-4 row-start-2 col-span-1 row-span-2">
          Tienda Generica
        </div>
        <div className="col-start-4 row-start-4 col-span-1 row-span-2">
          Tienda especial
        </div>
        <div className="col-start-1 row-start-6 col-span-1 row-span-4">
          Dungeon
        </div>
        <div className="col-start-2 row-start-6 col-span-3 row-span-2">
          Mision Secundaria
        </div>
        <div className="col-start-2 row-start-8 col-span-1 row-span-2">
          ??????
        </div>
        <div className="col-start-3 row-start-8 col-span-2 row-span-2">
          Arena?
        </div>
      </div>
    </>
  );
}

export default Land;
