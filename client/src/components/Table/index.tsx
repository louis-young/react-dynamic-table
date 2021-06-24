import type { TableProps } from "./types";

export const Table = ({ headers, rows }: TableProps) => {
  return (
    <table className="block overflow-x-scroll">
      <thead>
        <tr className="bg-gray-200">{headers}</tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
};
