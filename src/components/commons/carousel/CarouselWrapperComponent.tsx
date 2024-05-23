/* eslint-disable simple-import-sort/imports */
import styled from 'styled-components';

import Carousel from './carouselComponent/Carousel';
import CarouselText from './components/CarouselText';
import HeartComponent from './components/HeartComponent';
import SuperHostCard from './components/SuperHostCard';
import { RoomDataType } from '../../../pages/HomePage/types/HomePageItemType';

interface CarouselWrapperComponentprops {
  room: RoomDataType;
}
const CarouselWrapperComponent = (props: CarouselWrapperComponentprops) => {
  const { room } = props;
  return (
    <CarouselComponentWrapper>
      {room.isSuperHost ? <SuperHostCard /> : ''}
      <HeartComponent />
      <Carousel roomImageList={room.roomImageList} />
      <CarouselText
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
