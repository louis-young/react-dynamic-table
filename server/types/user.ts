interface UserName {
  title: string;
  first: string;
  last: string;
}

interface UserLocation {
  city: string;
  coordinates: { latitude: string; longitude: string };
  country: string;
  postcode: number;
  state: string;
  street: { number: number; name: string };
  timezone: { offset: string; description: string };
}

export interface UnformattedUser {
  cell: string;
  dob: { date: string; age: number };
  email: string;
  gender: string;
  id: { name: string; value: string };
  location: UserLocation;
  login: {
    uuid: string;
    username: string;
    password: string;
    salt: string;
    md5: string;
    sha256: string;
    sha1: string;
  };
  name: UserName;
  nat: string;
  phone: string;
  picture: { large: string; medium: string; thumbnail: string };
  registered: { date: string; age: number };
}

export interface FormattedUser {
  name: UserName;
  location: UserLocation;
}
