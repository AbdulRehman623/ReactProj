import { useRef } from "react";

export default function UseRefComp() {
  const inputRef = useRef(null);
  function handleInput() {
    console.log("function call");
    // inputRef.current.value = "150";
    inputRef.current.focus();
    // inputRef.current.style.color = "red";
    inputRef.current.style.color = "red";
  }
  return (
    <div>
      <h1>Use Ref</h1>
      <input type="text" ref={inputRef} />
      <button onClick={() => handleInput()}>Handle Input</button>
    </div>
  );
}
