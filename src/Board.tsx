import * as React from "react";

import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

import BoardSquare from "./BoardSquare";
import Knight from "./Knight";

interface BoardProps {
  knightPosition: [number, number];
}

export default function Board(props: BoardProps) {
  function renderPiece(x: number, y: number) {
    const [knightX, knightY] = props.knightPosition;
    const isKnightHere = x === knightX && y === knightY;

    return isKnightHere ? <Knight /> : <span>.</span>;
  }

  function renderSquare(i: number) {
    const x: number = i % 8;
    const y: number = Math.floor(i / 8);

    return (
      <div key={i} style={{ width: "12.5%", height: "12.5%" }}>
        <BoardSquare x={x} y={y}>
          {renderPiece(x, y)}
        </BoardSquare>
      </div>
    );
  }

  const squares = [];
  for (let i = 0; i < 64; i++) {
    squares.push(renderSquare(i));
  }

  return (
    <DndProvider backend={HTML5Backend}>
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexWrap: "wrap"
        }}
      >
        {squares}
      </div>
    </DndProvider>
  );
}
