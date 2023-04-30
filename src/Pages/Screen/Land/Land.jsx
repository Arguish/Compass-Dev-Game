import React from "react";

function Land() {
  return (
    <>
      <div style={{ height: "83vh" }} className="grid h-screen">
        <div className="col-start-1 row-start-1 col-span-3 row-span-5">1</div>
        <div className="col-start-4 row-start-1 col-span-1 row-span-1">2</div>
        <div className="col-start-4 row-start-2 col-span-1 row-span-2">3</div>
        <div className="col-start-4 row-start-4 col-span-1 row-span-2">4</div>
        <div className="col-start-1 row-start-6 col-span-1 row-span-4">5</div>
        <div className="col-start-2 row-start-6 col-span-3 row-span-2">6</div>
        <div className="col-start-2 row-start-8 col-span-1 row-span-2">7</div>
        <div className="col-start-3 row-start-8 col-span-2 row-span-2">8</div>
      </div>
    </>
  );
}

export default Land;
