import { useState } from "react";
import logo from "./logo.svg";

import "./App.css";
import First from "./First";
import Firstclass from "./Firstclass";
import Stateclass from "./Stateclass";
import Inputvalue from "./Inputvalue";
import Propfunc from "./Propfunc";
import React, { Component } from "react";
import SecondApp from "./SecondApp";
import Effect from "./Effect";
import CssStyle from "./CssStyle";
import BootstrapStyle from "./BootstrapStyle";
import MapFunction from "./MapFunction";
import MapLoopFunction from "./MapLoopFunction";

function App() {
  return (
    <div>
      {/* lec 28 to 30 */}
      <Effect />
      <CssStyle />
      {/* <MapFunction /> */}
      <MapLoopFunction />

      {/* <BootstrapStyle /> */}

      {/* <SecondApp /> */}
    </div>
  );
}

export default App;
