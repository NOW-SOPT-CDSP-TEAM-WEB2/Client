/* eslint-disable simple-import-sort/imports */
import { Map, MapMarker, ZoomControl } from 'react-kakao-maps-sdk';
import styled from 'styled-components';

import { latlngType } from '../WishListDetail';

interface StayLocationMapProps {
  latlngList: latlngType[];
}

const StayLocationMap = (props: StayLocationMapProps) => {
  const { latlngList } = props;

  if (latlngList.length === 0) {
    return (
      <StyledMap center={{ lat: 33.5563, lng: 126.79581 }} level={13}>
        <MapMarker
          position={{ lat: 33.55635, lng: 126.795841 }}
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
  }

  return (
    <StyledMap center={latlngList[0].latlng} level={13}>
      {latlngList.map((position, idx) => (
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
