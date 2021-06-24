export interface User {
  name: {
    title: string;
    first: string;
    last: string;
  };
  location: {
    city: string;
    coordinates: { latitude: string; longitude: string };
    country: string;
    postcode: number;
    state: string;
    street: { number: number; name: string };
    timezone: { offset: string; description: string };
  };
}
