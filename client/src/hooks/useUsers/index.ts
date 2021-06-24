import { pipe } from "ramda";
import { filterUsers, sortUsers } from "./utilities";
import { useUsersQuery } from "../queries/useUsersQuery";
import type { UseUsersParameters } from "./types";

export const useUsers = ({
  searchQuery,
  sortDirection,
  columnToSort,
}: UseUsersParameters) => {
  const { usersData, isLoadingUsers, hasUsersError } = useUsersQuery();

  const users = pipe(
    filterUsers(searchQuery),
    sortUsers(columnToSort, sortDirection)
  )(usersData?.users ?? []);

  return { users, isLoadingUsers, hasUsersError };
};
