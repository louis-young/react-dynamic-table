import classNames from "classnames";
import { TableCell } from "../TableCell";
import type { TableRowProps } from "./types";

export const TableRow = ({ user, isHighlighted }: TableRowProps) => {
  const tableRowClassNames = classNames({
    "border-b border-gray-200 hover:bg-gray-100": true,
    "bg-gray-50": isHighlighted,
  });

  return (
    <tr className={tableRowClassNames}>
      {Object.values(user).map((value) => (
        <TableCell value={value} key={value} />
      ))}
    </tr>
  );
};
