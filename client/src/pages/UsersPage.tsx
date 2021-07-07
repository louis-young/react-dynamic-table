import { useState } from "react";
import { getNewSortDirection } from "../utilities/sortDirections";
import { useUsers } from "../hooks/useUsers";
import { Search } from "../components/Search";
import { Table } from "../components/Table";
import { SortDirection } from "../types/sortDirection";
import { Message } from "../components/Message";
import { Page } from "../components/Page";

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
    <Page hasError={hasUsersError}>
      <aside className="mb-6">
        <Search
          searchQuery={searchQuery}
          onChange={setSearchQuery}
          isDisabled={isLoadingUsers}
        />
      </aside>

      {!isLoadingUsers && !users.length ? (
        <Message
          type="information"
          message="No users matched your search query."
        />
      ) : (
        <Table
          headers={headers}
          users={users}
          onSort={onSort}
          sortDirection={sortDirection}
          columnToSort={columnToSort}
          isLoading={isLoadingUsers}
        />
      )}
    </Page>
  );
};
