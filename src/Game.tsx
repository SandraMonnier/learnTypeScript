//import * as React from "react";

let knightPosition = [1, 7];
let observer: any = null;

function emitChange() {
  observer(knightPosition);
}

export function observe(o: any) {
  if (observer) {
    throw new Error("Multi observers not implemented");
  }

  observer = o;
  emitChange();
}

export function canMoveKnight(toX: number, toY: number) {
  const [x, y] = knightPosition;
  const dx = toX - x;
  const dy = toY - y;
  return (
    (Math.abs(dx) === 2 && Math.abs(dy) === 1) ||
    (Math.abs(dx) === 1 && Math.abs(dy) === 2)
  );
}

export function moveKnight(toX: number, toY: number) {
  knightPosition = [toX, toY];
  emitChange();
}

//export function observe(receive) {
//  const randPos = () => Math.floor(Math.random() * 8);
//  setInterval(() => receive([randPos(), randPos()]), 1000);
//}
