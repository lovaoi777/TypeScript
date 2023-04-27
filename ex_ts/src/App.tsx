import React from "react";
import P from "./components/P";
import StopPropagation from "./components/StopPropagation";

export default function App() {
  const texts = ["hello", "world"].map((text, index) => (
    <P key={index} children={text} />
  ));
  return (
    <>
      <div children={texts} />
      <StopPropagation />
    </>
  );
}
