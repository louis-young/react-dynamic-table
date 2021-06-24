import type { TableHeaderProps } from "./types";

export const TableHeader = ({ header, onSort }: TableHeaderProps) => {
  return (
    <th
      onClick={() => onSort(header)}
      className="text-gray-700 capitalize py-3 px-6 text-left"
    >
      {header}
    </th>
  );
};
