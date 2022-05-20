import React, { FC } from "react";
// Models
import { Cell } from "../models/Cell";

interface CellProps {
  cell: Cell;
  selected: boolean;
  click: (cell: Cell) => void;
}

const CellComponent: FC<CellProps> = ({ cell, selected, click }) => {
  return (
    <div
      className={["cell", cell.color, selected ? "selected" : ""].join(" ")}
      onClick={() => click(cell)}
      style={{ background: cell.available && !cell.figure ? "green" : "" }}
    >
      {cell.available && !cell.figure && <div className={"aviable"}></div>}
      {cell.figure?.logo && <img src={cell.figure.logo} alt="some figure" />}
    </div>
  );
};

export default CellComponent;
