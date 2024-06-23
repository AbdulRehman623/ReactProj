import { useMemo, useState } from "react";

export default function MemoComp() {
  const [count, setCount] = useState(0);
  const [multi, setmulti] = useState(10);

  function multiCount() {
    return (
      <div>
        {console.log(count)}
        <h1>Multiple of COunt is : {count * 5}</h1>
      </div>
    );
  }
  //   Using MEmo on Run When Count value change
  const multiMemoCount = useMemo(
    function multiCOunt() {
      return (
        <div>
          {console.log(count)}
          <h1>Multiple of COunt is : {count * 2}</h1>
        </div>
      );
    },
    [count]
  );

  return (
    <div>
      <h1>Use Memo Hook in React</h1>
      <h2>Count is : {count}</h2>
      <h2>Multiple is : {multi}</h2>
      <h2>MultiCount is : {multiCount()}</h2>
      <button onClick={() => setCount(count + 1)}>Add Count</button>
      <button onClick={() => setmulti(multi * 10)}>Multiple in Multi</button>
      <h2></h2>
    </div>
  );
}
