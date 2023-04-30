import React from "react";

function Mission() {
  return (
    <>
      <div style={{ height: "83vh" }} className="grid h-screen">
        <div className="col-start-1 row-start-1 col-span-4 row-span-2">
          Titulo y descripcion
        </div>
        <div className="col-start-1 row-start-3 col-span-4 row-span-1">
          Posibles enemigos
        </div>
        <div className="col-start-3 row-start-4 col-span-2 row-span-2">
          recursos que se pueden conseguir
        </div>
        <div className="col-start-1 row-start-4 col-span-2 row-span-5">
          Personaje al que puedes enviar
        </div>
        <div className="col-start-3 row-start-6 col-span-2 row-span-1">
          hueco vacio, mensaje
        </div>
        <div className="col-start-3 row-start-7 col-span-2 row-span-2">
          Boton de ir
        </div>
      </div>
    </>
  );
}

export default Mission;
