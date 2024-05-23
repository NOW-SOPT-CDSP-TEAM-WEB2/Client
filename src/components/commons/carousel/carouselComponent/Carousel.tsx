import './css/slick-theme.css';
import './css/slick.css';

import React, { useState } from 'react';
import Slider from 'react-slick';
import { styled } from 'styled-components';

import { NextArrow, PrevArrow } from './CustonArrows';

interface CarouselProps {
  roomImageList: string[];
  type: string;
}

const Carousel: React.FC<CarouselProps> = (props: CarouselProps) => {
  const { roomImageList, type } = props;
  const [slideState, setSlideState] = useState({
    activeSlide: 0,
    activeSlide2: 0,
  });

  const [isHovered, setIsHovered] = useState(false);

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: (current: number, next: number) => setSlideState({ activeSlide: next, activeSlide2: current }),
    nextArrow: isHovered && slideState.activeSlide < 4 ? <StyledNextArrow /> : undefined,
    prevArrow: isHovered && slideState.activeSlide > 0 ? <StyledPrevArrow /> : undefined,

    appendDots: (dots: React.ReactNode) => (
      <StyledDots>
        <ul>
          {React.Children.map(dots, (dot, index) =>
            React.cloneElement(dot as React.ReactElement, {
              className: `${index === slideState.activeSlide ? 'slick-active' : ''} ${
                (index === 0 && slideState.activeSlide === React.Children.count(dots) - 1) ||
                (slideState.activeSlide === 1 && index === 4) ||
                (slideState.activeSlide === 2 && (index === 0 || index === 4)) ||
                (index === React.Children.count(dots) - 1 && slideState.activeSlide === 0) ||
                (slideState.activeSlide === 3 && index === 0)
                  ? 'small-dot'
                  : ''
              }`,
            })
          )}
        </ul>
      </StyledDots>
    ),
    dotsClass: 'dots_custom',
  };

  return (
    <Carouselcontainer onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
      <Slider {...settings}>
        {roomImageList && roomImageList.map((src, index) => <CarouselImg $type={type} key={index} src={src} />)}
      </Slider>
    </Carouselcontainer>
  );
};

export default Carousel;

const Carouselcontainer = styled.div`
  cursor: pointer;
`;

const CarouselImg = styled.img<{ $type: string }>`
  width: ${({ $type }) => ($type === 'home' ? '23.7rem' : '26.3rem')};
  height: ${({ $type }) => ($type === 'home' ? '22.2rem' : '24.7rem')};
  /* width: 23.7rem; */
  /* height: 22.2rem;  */

  border-radius: 10px;
`;

const StyledNextArrow = styled(NextArrow)`
  position: absolute;
  top: 50%;
  right: 1.2rem;
  z-index: 1;

  transform: translateY(-50%);
`;

const StyledPrevArrow = styled(PrevArrow)`
  position: absolute;
  top: 50%;
  left: 0;
  z-index: 1;

  transform: translateY(-50%);
`;

const StyledDots = styled.div`
  position: absolute;
  bottom: 0.9rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;
