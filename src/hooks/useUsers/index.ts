import { pipe } from "ramda";
import { filterUsers, flattenUsers, formatUsers, sortUsers } from "./utilities";
import { useUsersQuery } from "../queries/useUsersQuery";
import type { UseUsersParameters } from "./types";

export const useUsers = ({
  searchQuery,
  sortDirection,
  columnToSort,
}: UseUsersParameters) => {
  const { usersData, isLoadingUsers, hasUsersError } = useUsersQuery();

  const users = pipe(
    formatUsers,
    // @ts-ignore
    flattenUsers,
    filterUsers(searchQuery),
    sortUsers(columnToSort, sortDirection)
    // @ts-ignore
  )(usersData?.results ?? []);

  return { users, isLoadingUsers, hasUsersError };
};
