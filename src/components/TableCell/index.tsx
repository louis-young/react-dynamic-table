import type { TableCellProps } from "./types";

export const TableCell = ({ value }: TableCellProps) => {
  return (
    <td className="py-3 px-6 text-left text-gray-600 text-sm whitespace-nowrap">
      {value}
    </td>
  );
};
