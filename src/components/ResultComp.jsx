import { useState } from "react";
export default function ResultComp({ val }) {
  const [res, setRes] = useState(0);
  const Increment = () => {
    setRes(res + parseInt(val));
  };
  const Decrement = () => {
    setRes(res - parseInt(val));
  };

  return (
    <>
      <input type="text" value={res} />
      <button onClick={Increment}>+</button>
      <button onClick={Decrement}>-</button>
    </>
  );
}
