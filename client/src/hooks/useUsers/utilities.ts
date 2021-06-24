import { SortDirection } from "../../types/sortDirection";
import type { User } from "../../types/user";

export const filterUsers = (searchQuery: string) => (users: User[]) => {
  if (!searchQuery) {
    return users;
  }

  const filteredUsers = users.filter((User) =>
    Object.values(User).some((value) =>
      String(value).toLowerCase().includes(searchQuery.toLowerCase())
    )
  );

  return filteredUsers;
};

export const sortUsers =
  (columnToSort: string | undefined, sortDirection: SortDirection) =>
  (users: User[]) => {
    if (!columnToSort) {
      return users;
    }

    const sortedUsers = [...users].sort((firstUser, secondUser) => {
      // @ts-ignore
      const firstUserValueToSort = firstUser[columnToSort];
      // @ts-ignore
      const secondUserValueToSort = secondUser[columnToSort];

      if (sortDirection === SortDirection.Ascending) {
        if (firstUserValueToSort < secondUserValueToSort) {
          return -1;
        }

        if (firstUserValueToSort > secondUserValueToSort) {
          return 1;
        }
      }

      if (sortDirection === SortDirection.Descending) {
        if (firstUserValueToSort > secondUserValueToSort) {
          return -1;
        }

        if (firstUserValueToSort < secondUserValueToSort) {
          return 1;
        }
      }

      return 0;
    });

    return sortedUsers;
  };
