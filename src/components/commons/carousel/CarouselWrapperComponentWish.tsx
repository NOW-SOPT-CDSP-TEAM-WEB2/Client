/* eslint-disable simple-import-sort/imports */
import styled from 'styled-components';

import Carousel from './carouselComponent/Carousel';
import CarouselText from './components/CarouselText';
import SuperHostCard from './components/SuperHostCard';
import { HeartPink24Icon } from '../../../assets/svgs/index.tsx';
import { roomResponseType } from '../../../pages/wishList/utils/getWishList.ts';

interface carouselWrapperComponentWishProps {
  wishList: roomResponseType;
}

const CarouselWrapperComponentWish = (props: carouselWrapperComponentWishProps) => {
  const { wishList } = props;
  return (
    <CarouselComponentWrapper>
      {wishList.isSuperHost ? <SuperHostCard /> : ''}
      <HeartComponentWrapper>
        <HeartPink24Icon />
      </HeartComponentWrapper>
      <Carousel roomImageList={wishList.roomImageList} />
      <CarouselText
        roomlocation={wishList.roomLocation}
        currentDistance={wishList.currentDistance}
        roomRating={wishList.roomRating}
        recommendedDates={wishList.recommendedDates}
        guestReview={wishList.guestReview}
        roomPrice={wishList.roomPrice}
      />
    </CarouselComponentWrapper>
  );
};

export default CarouselWrapperComponentWish;

const CarouselComponentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 23.7rem;
  height: 31.2rem;
`;

const HeartComponentWrapper = styled.div`
  position: absolute;
  z-index: 1;
  float: right;
  width: 6.7rem;
  height: 2.1rem;
  margin: 1.3rem 1.5rem 0 20rem;
`;
