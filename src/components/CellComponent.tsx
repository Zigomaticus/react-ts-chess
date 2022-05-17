import React, { FC } from "react";
// Models
import { Cell } from "../models/Cell";

interface CellProps {
  cell: Cell;
}

const CellComponent: FC<CellProps> = ({ cell }) => {
  return (
    <div className={["cell", cell.color].join(" ")}>
      {cell.figure?.logo && <img src={cell.figure.logo} alt="some figure" />}
    </div>
  );
};

export default CellComponent;
