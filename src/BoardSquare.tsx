import * as React from "react";
import { useDrop } from "react-dnd";
import { ItemTypes } from "./Constants";
import { canMoveKnight, moveKnight } from "./Game";
import Square from "./Square";

interface BoardSquareProps {
  x: number;
  y: number;
  children: any;
}

export default function BoardSquare(props: BoardSquareProps) {
  const [{ isOver, canDrop }, drop] = useDrop({
    accept: ItemTypes.KNIGHT,
    canDrop: () => canMoveKnight(props.x, props.y),
    drop: () => moveKnight(props.x, props.y),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
      canDrop: !!monitor.canDrop()
    })
  });

  const isBlack = (props.x + props.y) % 2 === 1;

  return (
    <div
      ref={drop}
      style={{ position: "relative", width: "100%", height: "100%" }}
    >
      <Square isBlack={isBlack}>{props.children}</Square>
      {isOver && !canDrop && (
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            height: "100%",
            width: "100%",
            zIndex: 1,
            backgroundColor: "red"
          }}
        />
      )}
      {!isOver && canDrop && (
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            height: "100%",
            width: "100%",
            zIndex: 1,
            backgroundColor: "yellow"
          }}
        />
      )}
      {isOver && canDrop && (
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            height: "100%",
            width: "100%",
            zIndex: 1,
            backgroundColor: "green"
          }}
        />
      )}
    </div>
  );
}
