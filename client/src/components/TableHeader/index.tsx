import { SortDirectionIndicator } from "../SortDirectionIndicator";
import { SortDirection } from "../../types/sortDirection";
import type { TableHeaderProps } from "./types";

export const TableHeader = ({
  header,
  onSort,
  sortDirection,
  isSorted,
}: TableHeaderProps) => {
  const hasSortDirectionIndicator =
    isSorted && sortDirection !== SortDirection.Unsorted;

  return (
    <th
      onClick={() => onSort(header)}
      className="text-gray-700 capitalize py-3 px-6 text-left"
    >
      <div className="flex items-center gap-2">
        {header}

        {hasSortDirectionIndicator && (
          <SortDirectionIndicator sortDirection={sortDirection} />
        )}
      </div>
    </th>
  );
};
