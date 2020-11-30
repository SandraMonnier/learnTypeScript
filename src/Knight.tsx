import * as React from "react";
import { useDrag } from "react-dnd";
import { ItemTypes } from "./Constants";

function Knight() {
  const [{ isDragging }, drag] = useDrag({
    item: { type: ItemTypes.KNIGHT },
    collect: (monitor: any) => ({ isDragging: !!monitor.isDragging() })
  });

  return (
    <>
      <div
        ref={drag}
        style={{
          opacity: isDragging ? 0.5 : 1,
          fontSize: 44,
          fontWeight: "bold",
          cursor: "move"
        }}
      >
        {"\u2658"}
      </div>
    </>
  );
}

export default Knight;
