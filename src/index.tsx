import * as React from "react";
import { render } from "react-dom";

import Board from "./Board";
import { observe } from "./Game";

const rootElement = document.getElementById("root");
observe((knightPosition: [number, number]) =>
  render(
    <div style={{ width: 500, height: 500, border: "1px solid gray" }}>
      <Board knightPosition={knightPosition} />
    </div>,
    rootElement
  )
);
