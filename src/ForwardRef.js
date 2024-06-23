import { useRef } from "react";
import SecondForwardRef from "./SecondForwardRef";

function ForwardRef() {
  let inputval = useRef(null);
  function updateval() {
    inputval.current.value = "100";
    inputval.current.style.color = "red";
    inputval.current.focus();
  }

  return (
    <div>
      <h1>Forward Ref In React</h1>
      <SecondForwardRef ref={inputval} />
      <button onClick={updateval}>Update InputBox</button>
    </div>
  );
}

export default ForwardRef;
