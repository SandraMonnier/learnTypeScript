import * as React from "react";
import "./styles.css";

interface SquareProps {
  isBlack: boolean;
  children: any;
}

export default function Square(props: SquareProps) {
  const bgColor = props.isBlack ? "black" : "white";
  const txtColor = props.isBlack ? "white" : "black";

  return (
    <div
      style={{
        backgroundColor: bgColor,
        color: txtColor,
        width: "100%",
        height: "100%",
        textAlign: "center"
      }}
    >
      {props.children}
    </div>
  );
}
