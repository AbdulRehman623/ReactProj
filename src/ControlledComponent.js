import { useState } from "react";

export default function ControlledComponent() {
  let [val, setVal] = useState("000");
  return (
    <div>
      <h1>Controlled Component</h1>
      <input
        //   defaultValue="abc"
        value={val}
        onChange={(e) => setVal(e.target.value)}
      />
      <h1>Value is: {val}</h1>
    </div>
  );
}
