import { useContext } from "react";
import { GlobalContext } from "../../Context/Context/Context";

function Hello() {
  const { meaning } = useContext(GlobalContext);

  return (
    <div>
      <button className="contrast"> Clickme!</button>
      <span>{meaning}</span> Hello
    </div>
  );
}

export default Hello;
