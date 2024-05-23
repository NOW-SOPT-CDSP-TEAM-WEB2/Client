/* eslint-disable simple-import-sort/imports */
import { Dispatch, SetStateAction, useState } from 'react';
import styled from 'styled-components';

import Carousel from './carouselComponent/Carousel';
import CarouselText from './components/CarouselText';
import HeartComponent from './components/HeartComponent';
import SuperHostCard from './components/SuperHostCard';
import { deleteWishList, getRoomData, postWishList } from '../../../pages/HomePage/apis/https';
import { RoomDataType } from '../../../pages/HomePage/types/HomePageItemType';

interface CarouselWrapperComponentprops {
  room: RoomDataType;
  setRoomData: Dispatch<SetStateAction<RoomDataType[]>>;
}

const CarouselWrapperComponent = (props: CarouselWrapperComponentprops) => {
  const { room, setRoomData } = props;
  const [localWish, setLocalWish] = useState(room.isWishList);

  const postWish = async (roomId: number) => {
    postWishList(roomId);
  };

  const deleteWish = async (roomId: number) => {
    deleteWishList(roomId);
  };

  const fetchRoomData = async () => {
    const roomData = await getRoomData();
    setRoomData(roomData);
  };

  const handleCardClick = (props: RoomDataType) => {
    const room = props;
    setLocalWish((prevState) => !prevState);
    room.isWishList ? deleteWish(room.roomId) : postWish(room.roomId);
    fetchRoomData();
  };

  return (
    <CarouselComponentWrapper>
      {room.isSuperHost ? <SuperHostCard /> : ''}
      <HeartComponent isWishList={localWish} handleCardClick={() => handleCardClick(room)} />
      <Carousel type="home" roomImageList={room.roomImageList} />
      <CarouselText
        type="home"
        roomlocation={room.roomLocation}
        currentDistance={room.currentDistance}
        roomRating={room.roomRating}
        recommendedDates={room.recommendedDates}
        guestReview={room.guestReview}
        roomPrice={room.roomPrice}
      />
    </CarouselComponentWrapper>
  );
};

export default CarouselWrapperComponent;

const CarouselComponentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 23.7rem;
  height: 31.2rem;
`;
