import React, { useState, useEffect } from "react";
import EffectProps from "./EffectProps";

export default function Effect() {
  const [Count, setCount] = useState(0);
  const [Data, setData] = useState(10);

  return (
    <div>
      <EffectProps count={Count} data={Data} />
      <button onClick={() => setCount(Count + 1)}>Add Count</button>
      <button onClick={() => setData(Data + 1)}>Add Data</button>
    </div>
  );
}
