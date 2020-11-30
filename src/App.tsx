import * as React from "react";
import "./styles.css";

import Board from "./Board";

export default function App() {
  return (
    <div className="App">
      <h1>learn DnD with chess game</h1>
      <Board knightPosition={[3, 6]} />
    </div>
  );
}
