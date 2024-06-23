import { useRef } from "react";

export default function UnControlledComponent() {
  let val1 = useRef(null);
  let val2 = useRef(null);

  function SubmitForm(e) {
    e.preventDefault();
    console.log("input field value of val 1:", val1.current.value);
    console.log("input field value of val 2:", val2.current.value);
    let val3 = document.getElementById("val3").value;
    console.log("input field values of val 3:", val3);
  }

  return (
    <div>
      <h1>Uncontrolled Fields</h1>
      <form onSubmit={SubmitForm}>
        <input ref={val1} type="text" />
        <input ref={val2} type="text" />
        <input id="val3" type="text" />
        <button type="submit"> Show values</button>
      </form>
    </div>
  );
}
