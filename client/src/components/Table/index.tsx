import { Skeleton } from "../Skeleton";
import { TableHeader } from "../TableHeader";
import { TableRow } from "../TableRow";
import type { TableProps } from "./types";

export const Table = ({
  headers,
  users,
  onSort,
  sortDirection,
  columnToSort,
  isLoading,
}: TableProps) => {
  if (isLoading) {
    return <Skeleton />;
  }

  return (
    <table className="block overflow-x-scroll">
      <thead>
        <tr className="bg-gray-200">
          {headers.map((header) => (
            <TableHeader
              header={header}
              onSort={onSort}
              sortDirection={sortDirection}
              isSorted={columnToSort === header}
              key={header}
            />
          ))}
        </tr>
      </thead>
      <tbody>
        {users.map((user, index) => (
          <TableRow
            user={user}
            isHighlighted={Boolean(index % 2)}
            key={JSON.stringify(user)}
          />
        ))}
      </tbody>
    </table>
  );
};
