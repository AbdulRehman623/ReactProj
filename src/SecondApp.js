import { useState } from "react";
import logo from "./logo.svg";

import First from "./First";
import Firstclass from "./Firstclass";
import Stateclass from "./Stateclass";
import Inputvalue from "./Inputvalue";
import Propfunc from "./Propfunc";
import React, { Component } from "react";

import Form from "./Form";

export default function SecondApp() {
  {
    /* lec# 11 state Func */
  }
  let [val, setData] = useState("Abdul");

  function apple() {
    console.warn({ val });
    setData("Rehman");
    // return alert("hello Apple");
  }

  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <h1>Hello World</h1>
      {/* lec 17 */}
      <Form />
      <Inputvalue />
      <First />
      <Firstclass />
      <SameFirst />
      <SameFirstclass />

      {/* lec# 12 state class */}
      <Stateclass />

      {/* lec# 13 Props */}
      <Propfunc
        name="abdul"
        email="Testemail@gmail.com"
        other={{ address: "Sialkot" }}
      />
      <Propfunc
        name="Syed Osman"
        email="TEstName@gmail.com"
        other={{ address: "Hydrabad" }}
      />

      <h2>{val}</h2>

      {/* Events */}
      {/* this will run direct */}
      {/* <button onClick={apple()}>Click Me</button>    */}
      {/* this will wait for click*/}
      <button onClick={apple}>Click Me</button>
      {/* this will run direct */}
      {/* <button onClick={alert("hello alert")}>Click Me</button>    */}
      {/* this will wait for click*/}
      {/* <button onClick={()=>alert("hello alert")}>Click Me</button>    */}
    </div>
  );
}

function SameFirst() {
  return <h1>Hello Same Component First function</h1>;
}

class SameFirstclass extends Component {
  render() {
    return <h1>Hello Same Component First Class</h1>;
  }
}
