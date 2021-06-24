import classNames from "classnames";
import type { TableRowProps } from "./types";

export const TableRow = ({ cells, isHighlighted }: TableRowProps) => {
  const tableRowClassNames = classNames({
    "border-b border-gray-200 hover:bg-gray-100": true,
    "bg-gray-50": isHighlighted,
  });

  return <tr className={tableRowClassNames}>{cells}</tr>;
};
