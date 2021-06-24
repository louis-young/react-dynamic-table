import { SortDirection } from "../../types/sortDirection";
import type { UnformattedUser, FormattedUser } from "../../types/user";

export const formatUsers = (users: UnformattedUser[]) => {
  const formattedUsers = users.map(({ name, location }) => ({
    name,
    location,
  }));

  return formattedUsers;
};

export const flattenUsers = (users: FormattedUser[]) => {
  const flattenedUsers = users.map(({ name, location }) => {
    const { street, coordinates, timezone, ...additionalUserProperties } =
      location;

    return {
      title: name.title,
      first: name.first,
      last: name.last,
      number: street.number,
      name: street.name,
      ...additionalUserProperties,
      latitude: coordinates.latitude,
      longitude: coordinates.longitude,
      offset: timezone.offset,
      description: timezone.description,
    };
  });

  return flattenedUsers;
};

export const filterUsers =
  (searchQuery: string) => (users: FormattedUser[]) => {
    if (!searchQuery) {
      return users;
    }

    const filteredUsers = users.filter((formattedUser) =>
      Object.values(formattedUser).some((value) =>
        String(value).toLowerCase().includes(searchQuery.toLowerCase())
      )
    );

    return filteredUsers;
  };

export const sortUsers =
  (columnToSort: string | undefined, sortDirection: SortDirection) =>
  (users: FormattedUser[]) => {
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
