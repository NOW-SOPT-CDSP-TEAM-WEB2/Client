/* eslint-disable simple-import-sort/imports */
import { useState, useEffect } from 'react';
import { Map, MapMarker, ZoomControl } from 'react-kakao-maps-sdk';
import styled from 'styled-components';

import { wishListApiDataType } from '../../wishList/utils/getWishList';
import { latlngType } from '../WishListDetail';

interface StayLocationMapProps {
  wishList: wishListApiDataType[];
}

const StayLocationMap = (props: StayLocationMapProps) => {
  const { wishList } = props;
  const [latLngList, setLatLngList] = useState<latlngType[]>([]);

  const convertLatLng = (roomData: wishListApiDataType[]) => {
    return roomData.map((item) => ({
      latlng: { lat: item.latitude, lng: item.longitude },
    }));
  };

  useEffect(() => {
    if (wishList.length !== 0) {
      const convertedWishLocList = convertLatLng(wishList);
      setLatLngList(convertedWishLocList);
    }
  }, [wishList]);

  if (latLngList.length === 0) {
    return <></>;
  }

  return (
    <StyledMap center={latLngList[0].latlng} level={13}>
      {latLngList.map((position, idx) => (
        <MapMarker
          key={`${position.latlng}-${idx}`}
          position={position.latlng}
          image={{
            // src: './src/assets/images/btn_ic_circle_pin_amall.png',
            src: '/images/btn_ic_circle_pin_amall.svg',
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
