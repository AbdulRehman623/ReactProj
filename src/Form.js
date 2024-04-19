import { useState } from "react";

export default function Form() {
  const [name, setName] = useState("");
  const [tnc, setTnc] = useState(false);
  const [interest, setInterest] = useState("");

  function getFormData(e) {
    e.preventDefault();
    console.log(name, tnc, interest);
  }

  return (
    <div className="Form">
      <h1>Hello</h1>
      <form onSubmit={getFormData}>
        <input
          type="text"
          placeholder="Enter Name"
          onChange={(e) => setName(e.target.value)}
        />
        <br /> <br />
        <select onChange={(e) => setInterest(e.target.value)}>
          <option>Select Options</option>
          <option>Marwal</option>
          <option>DC</option>
        </select>
        <br /> <br />
        <input type="checkbox" onChange={(e) => setTnc(e.target.checked)} />
        <span>Accept Terms and conditions</span>
        <br /> <br />
        <button type="submit">Submit</button>
        <button>clear</button>
      </form>
    </div>
  );
}
