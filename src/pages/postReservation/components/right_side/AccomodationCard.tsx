import React from 'react';
import styled from 'styled-components';

import { MedalFillBlackIcon, PostReservationHousingCard, StarIcon } from '../../../../assets/svgs';

type Props = {
  roomName: string;
  description: string;
  isSuperHost: boolean;
};

const AccomodationInfoCard = (props: Props) => {
  return (
    <>
      <Accomodationwrapper>
        <PostReservationHousingCard />
        <AccomodationTextWrapper>
          <AccomodationName>{props.roomName}</AccomodationName>
          <AccomodationDetail>{props.description}</AccomodationDetail>
          <IconAreaWrapper>
            <AccomodationDescr>
              {' '}
              <IconWrapper>
                <StarIcon />
              </IconWrapper>
              4.94 {'('}후기 84개{')'}
              {props.isSuperHost && (
                <>
                  <IconWrapper $issuperHost={props.isSuperHost}>
                    <MedalFillBlackIcon />
                  </IconWrapper>
                  슈퍼호스트
                </>
              )}
            </AccomodationDescr>
          </IconAreaWrapper>
        </AccomodationTextWrapper>
      </Accomodationwrapper>
    </>
  );
};

export default AccomodationInfoCard;

const Accomodationwrapper = styled.div`
  display: flex;
  padding-bottom: 2rem;
`;

const AccomodationTextWrapper = styled.div`
  width: 23rem;
  height: 7.9rem;
  padding: 1.4rem 0 1.4rem 1.4rem;
`;

const AccomodationName = styled.p`
  height: 0.9rem;

  color: ${({ theme }) => theme.colors.black};
  ${({ theme }) => theme.fonts.body01_middle};
`;
const IconAreaWrapper = styled.div`
  top: 50%;
  display: flex;

  line-height: 1.2rem;
  text-align: center;
`;

const AccomodationDetail = styled.p`
  padding-top: 1.4rem;

  color: ${({ theme }) => theme.colors.detail2};
  ${({ theme }) => theme.fonts.body03_middle};
`;

const AccomodationDescr = styled.p`
  height: 0.9rem;

  color: ${({ theme }) => theme.colors.detail2};
  ${({ theme }) => theme.fonts.body03_middle};
`;

const IconWrapper = styled.span<{ $issuperHost: boolean }>`
  position: relative;
  top: 0.25rem;
  display: inline-block;
  padding-left: ${(props) => (props.$issuperHost ? '0.6rem' : '0')};
`;
