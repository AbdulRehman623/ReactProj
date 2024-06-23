import { useState } from "react";

export default function HOC() {
  return (
    <div>
      <h1>HOC Component</h1>
      <Counter />

      <HOCRed cmp={Counter} />
      <HOCGreen cmp={Counter} />
      <HOCBlue cmp={Counter} />
    </div>
  );
}

function HOCRed(props) {
  return (
    <h2 style={{ background: "red", width: 100 }}>
      Red <props.cmp />
    </h2>
  );
}

function HOCGreen(props) {
  return (
    <h2 style={{ background: "Green", width: 100 }}>
      Green <props.cmp />
    </h2>
  );
}

function HOCBlue(props) {
  return (
    <div>
      <h2 style={{ background: "Blue", width: 100 }}>
        Blue <props.cmp />
      </h2>
    </div>
  );
}

function Counter() {
  const [val, setVal] = useState(0);
  return (
    <div>
      <h1>Total val : {val}</h1>
      <button
        onClick={() => {
          setVal(val + 1);
        }}
      >
        Add
      </button>
    </div>
  );
}
