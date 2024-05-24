import { Map, MapMarker, ZoomControl } from 'react-kakao-maps-sdk';
import styled from 'styled-components';

interface StayMapProps {
  lat: number;
  lng: number;
}

const StayMap = (props: StayMapProps) => {
  const { lat, lng } = props;

  return (
    <StyledMap center={{ lat: lat, lng: lng }} level={3}>
      <MapMarker
        position={{ lat: lat, lng: lng }}
        image={{
          src: './src/assets/svgs/btn_ic_circle_pin_amall.svg',
          size: {
            width: 50,
            height: 50,
          },
        }}
      />
      <ZoomControl />
    </StyledMap>
  );
};

export default StayMap;

const StyledMap = styled(Map)`
  width: 100%;
  height: 37.5rem;
`;
