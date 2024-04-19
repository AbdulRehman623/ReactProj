import React, { useState, useEffect } from "react";

export default function EffectProps(props) {
  useEffect(() => {
    console.log("Effect Data");
  }, [props.data]);
  useEffect(() => {
    console.log("Effect Count");
  }, [props.count]);

  //   if multiple on same filter then
  //   useEffect(() => {
  //     console.log("Effect Count");
  //   }, [props.count, props.data]);

  return (
    <div>
      <h1>Total number {props.count}</h1>
      <h1>Total Data {props.data}</h1>
    </div>
  );
}
