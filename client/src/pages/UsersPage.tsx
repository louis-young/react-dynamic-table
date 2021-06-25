import { useState } from "react";
import { v4 as uuid } from "uuid";
import { getNewSortDirection } from "../utilities/sortDirections";
import { useUsers } from "../hooks/useUsers";
import { Page } from "../components/Page";
import { SearchForm } from "../components/SearchForm";
import { Table } from "../components/Table";
import { TableHeader } from "../components/TableHeader";
import { TableRow } from "../components/TableRow";
import { TableCell } from "../components/TableCell";
import { SortDirection } from "../types/sortDirection";
import { Message } from "../components/Message";

export const UsersPage = () => {
  const [columnToSort, setColumnToSort] = useState<string>();
  const [sortDirection, setSortDirection] = useState(SortDirection.Unsorted);

  const [searchQuery, setSearchQuery] = useState("");

  const { users, isLoadingUsers, hasUsersError } = useUsers({
    searchQuery,
    sortDirection,
    columnToSort,
  });

  const onSort = (newColumnToSort: string) => {
    const newSortDirection = getNewSortDirection(sortDirection);

    setSortDirection(newSortDirection);

    setColumnToSort(newColumnToSort);
  };

  const [user] = users;

  const headers = user ? Object.keys(user) : [];

  return (
    <Page isLoading={isLoadingUsers} hasError={hasUsersError}>
      <aside className="mb-6">
        <SearchForm searchQuery={searchQuery} onChange={setSearchQuery} />
      </aside>

      {!users.length ? (
        <Message
          type="information"
          message="No users matched your search query."
        />
      ) : (
        <Table
          headers={headers.map((header) => (
            <TableHeader header={header} onSort={onSort} key={uuid()} />
          ))}
          rows={users.map((user, index) => (
            <TableRow
              cells={Object.values(user).map((value) => (
                <TableCell value={value} key={uuid()} />
              ))}
              isHighlighted={Boolean(index % 2)}
              key={uuid()}
            />
          ))}
        />
      )}
    </Page>
  );
};
