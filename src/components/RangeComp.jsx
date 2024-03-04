import { useState } from "react";
import ResultComp from "./ResultComp";
export default function RangeComp() {
  const [val, setVal] = useState(0);
  function handleChange(e) {
    setVal(e.target.value);
  }
  return (
    <>
      <input type="range" min="0" max="100" onChange={handleChange} />
      <p>{val}</p>
      <ResultComp val={val} />
    </>
  );
}
