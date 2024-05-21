import React from 'react';
import styled from 'styled-components';

import { StarIcon } from '../../../../assets/svgs';

type Props = {
  roomlocation: string;
  currentDistance: string;
  roomRating: number;
  recommendedDates: string;
  guestReview: string;
  roomPrice: number;
};

const CarouselText = (props: Props) => {
  return (
    <>
      <CarouselTextWrapper>
        <TextTitleWrapper>
          <TextTitle>{props.roomlocation}</TextTitle>
          <TextRate>
            {' '}
            <StarIcon />
            {props.roomRating}
          </TextRate>
        </TextTitleWrapper>
        <TextContent>{props.currentDistance}</TextContent>
        <TextContentWrapper>
          <TextContent>예약 추천 </TextContent>
          <TextContentBold>{props.recommendedDates} </TextContentBold>
        </TextContentWrapper>
        <TextContentWrapper>
          <TextContent>게스트 리뷰 </TextContent>
          <TextContentBold>{props.guestReview} </TextContentBold>
        </TextContentWrapper>
        <TextPriceContent>₩{props.roomPrice.toLocaleString()} /박</TextPriceContent>
      </CarouselTextWrapper>
    </>
  );
};

export default CarouselText;

const CarouselTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 23.7rem;
`;

export const TextTitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const TextTitle = styled.p`
  padding-top: 0.6rem;
  ${({ theme }) => theme.fonts.body02_heavy}
`;

export const TextRate = styled.p`
  padding: 0.6rem 0.2rem;
  ${({ theme }) => theme.fonts.body03_light}
`;

export const TextContentWrapper = styled.div`
  display: flex;
  padding-top: 0.2rem;
`;

export const TextContent = styled.p`
  ${({ theme }) => theme.fonts.body03_middle}
  color: ${({ theme }) => theme.colors.gray800};
`;

export const TextContentBold = styled.span`
  ${({ theme }) => theme.fonts.detail1_heavy}
  padding-left: 0.6rem;
`;

export const TextPriceContent = styled.p`
  padding-top: 0.3rem;
  ${({ theme }) => theme.fonts.body03_heavy}
`;
