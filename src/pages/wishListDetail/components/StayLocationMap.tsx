/* eslint-disable simple-import-sort/imports */
import { Map, MapMarker, ZoomControl } from 'react-kakao-maps-sdk';
import styled from 'styled-components';

import LOCATION_DATA from '../constants/wishListDetailData';

const StayLocationMap = () => {
  return (
    <StyledMap center={LOCATION_DATA[0].latlng} level={13}>
      {LOCATION_DATA.map((position, idx) => (
        <MapMarker
          key={`${position.latlng}-${idx}`}
          position={position.latlng}
          image={{
            src: './src/assets/svgs/btn_ic_circle_pin_amall.svg',
            size: {
              width: 50,
              height: 50,
            },
          }}
        />
      ))}
      <ZoomControl />
    </StyledMap>
  );
};

export default StayLocationMap;

const StyledMap = styled(Map)`
  width: 116.6rem;
  height: 30.4rem;
`;
