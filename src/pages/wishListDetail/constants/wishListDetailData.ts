interface location {
  lat: number;
  lng: number;
}

interface latlngType {
  latlng: location;
}

const LOCATION_DATA: latlngType[] = [
  {
    latlng: { lat: 36.6210684, lng: 127.2831028 },
  },
  {
    latlng: { lat: 37.4851473, lng: 126.8968387 },
  },
  {
    latlng: { lat: 37.4612297, lng: 126.8139826 },
  },
  {
    latlng: { lat: 36.3276832, lng: 127.4273424 },
  },
];

export default LOCATION_DATA;
