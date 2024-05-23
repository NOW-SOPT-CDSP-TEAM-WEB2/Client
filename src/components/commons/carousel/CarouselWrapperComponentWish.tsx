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
      <Carousel type="wish" roomImageList={wishList.roomImageList} />
      <CarouselText
        type="wish"
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
  position: relative;
  display: flex;
  flex-direction: column;
  width: 26.3rem;
  height: 34.8rem;
`;

const HeartComponentWrapper = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.2rem;
  z-index: 1;
`;
