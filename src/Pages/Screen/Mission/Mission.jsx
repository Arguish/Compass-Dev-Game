import React from "react";

function Mission() {
  return (
    <>
      <div style={{ height: "83vh" }} className="grid h-screen">
        <div className="col-start-1 row-start-1 col-span-4 row-span-2">1</div>
        <div className="col-start-1 row-start-3 col-span-4 row-span-1">2</div>
        <div className="col-start-3 row-start-4 col-span-2 row-span-2">3</div>
        <div className="col-start-1 row-start-4 col-span-2 row-span-5">4</div>
        <div className="col-start-3 row-start-6 col-span-2 row-span-1">5</div>
        <div className="col-start-3 row-start-7 col-span-2 row-span-2">6</div>
      </div>
    </>
  );
}

export default Mission;
