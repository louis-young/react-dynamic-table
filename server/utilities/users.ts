import type { FormattedUser, UnformattedUser } from "../types/user";

export const formatUsers = (users: UnformattedUser[]) => {
  return users.map(({ name, location }) => ({
    name,
    location,
  }));
};

export const flattenUsers = (users: FormattedUser[]) => {
  return users.map(({ name, location }) => {
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
};
