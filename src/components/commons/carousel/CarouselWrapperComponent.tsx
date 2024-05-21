import React from 'react';
import styled from 'styled-components';

import Carousel from './carouselComponent/Carousel';
import HeartComponent from './carouselComponent/HeartComponent';
import SuperHostCard from './carouselComponent/SuperHostCard';
import CarouselText from './CarouselText';
import { API_TEST_CAROUSEL } from './constants/apiTest.ts';

const CarouselWrapperComponent = () => {
  return (
    <>
      <CarouselComponentWrapper>
        {API_TEST_CAROUSEL.isSuperHost ? <SuperHostCard /> : ''}
        <HeartComponent />
        <Carousel roomImageList={API_TEST_CAROUSEL.roomImageList} />
        <CarouselText
          roomlocation={API_TEST_CAROUSEL.roomlocation}
          currentDistance={API_TEST_CAROUSEL.currentDistance}
          roomRating={API_TEST_CAROUSEL.roomRating}
          recommendedDates={API_TEST_CAROUSEL.recommendedDates}
          guestReview={API_TEST_CAROUSEL.guestReview}
          roomPrice={API_TEST_CAROUSEL.roomPrice}
        />
      </CarouselComponentWrapper>
    </>
  );
};

export default CarouselWrapperComponent;

const CarouselComponentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 23.7rem;
  height: 31.2rem;
`;
