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
import ReuseComp from "./ReuseComp";
import LiftingStateUpComp from "./LiftingStateUpComp";
import MemoComp from "./MemoComp";
import UseRefComp from "./UseRefComp";
import ForwardRef from "./ForwardRef";
import ControlledComponent from "./ControlledComponent";
import UnControlledComponent from "./UnControlledComponent";
import HOC from "./HOC";

export default function ThirdApp() {
  return (
    <div>
      {/* lec 28 to 30 */}
      <Effect />
      <CssStyle />
      {/* <MapFunction /> */}
      {/* <MapLoopFunction /> */}
      <ReuseComp />
      {/* lec 38 */}
      <LiftingStateUpComp />
      {/* lec 40 */}
      <MemoComp />
      {/* lec 42 */}
      <UseRefComp />
      {/* lec 43 */}
      <ForwardRef />
      {/* lec 44 */}
      <ControlledComponent />

      {/* lec 45 */}
      <UnControlledComponent />

      {/* lec 46 */}
      <HOC />
      {/* <RCheck /> */}
      {/* <BootstrapStyle /> */}
    </div>
  );
}
