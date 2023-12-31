export interface Location {
  name: string;
  latitude: number;
  longitude: number;
}

export interface Crime {
  key: string;
  data: {
    image?: string;
    name: string;
    location: Location;
    time_reported: any;
    phone: string;
    reporter: string;
    status: boolean;
    extra: string;
  };
}
