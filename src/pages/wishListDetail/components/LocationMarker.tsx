import { useEffect, useState } from 'react';
import { MapMarker } from 'react-kakao-maps-sdk';

interface LocationMarkerPropTypes {
  lat: number;
  lng: number;
}

const LocationMarker = (props: LocationMarkerPropTypes) => {
  const { lat, lng } = props;
  const [position, setPosition] = useState({
    lat: 36.6210684,
    lng: 127.2831028,
  });

  useEffect(() => {
    setPosition({
      lat: lat,
      lng: lng,
    });
  }, [lat, lng]);

  return (
    <MapMarker
      position={position}
      image={{ src: './src/assets/svgs/btn_ic_circle_pin_amall.svg', size: { width: 23, height: 23 } }}
    />
  );
};

export default LocationMarker;
