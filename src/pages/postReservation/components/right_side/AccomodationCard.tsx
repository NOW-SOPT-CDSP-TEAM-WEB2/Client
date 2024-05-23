import styled from 'styled-components';

import { MedalFillBlackIcon, PostReservationHousingCard, StarIcon } from '../../../../assets/svgs';

interface AccomodationCardProps {
  roomName: string;
  description: string;
  isSuperHost: boolean;
  roomRating: number;
}

const AccomodationInfoCard = (props: AccomodationCardProps) => {
  const { roomName, description, isSuperHost, roomRating } = props;
  return (
    <>
      <Accomodationwrapper>
        <PostReservationHousingCard />
        <AccomodationTextWrapper>
          <AccomodationName>{roomName}</AccomodationName>
          <AccomodationDetail>{description}</AccomodationDetail>
          <IconAreaWrapper>
            <AccomodationDescr>
              {' '}
              <IconWrapper>
                <StarIcon />
              </IconWrapper>
              {roomRating} {'('}후기 84개{')'}
              {isSuperHost && (
                <>
                  <HostIconWrapper $issuperHost={isSuperHost}>
                    <MedalFillBlackIcon />
                  </HostIconWrapper>
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

  color: ${({ theme }) => theme.colors.black};
  ${({ theme }) => theme.fonts.body03_middle};
`;

const AccomodationDescr = styled.p`
  height: 0.9rem;

  color: ${({ theme }) => theme.colors.black};
  ${({ theme }) => theme.fonts.body03_middle};
`;

const IconWrapper = styled.span`
  position: relative;
  top: 0.25rem;
  display: inline-block;
`;

const HostIconWrapper = styled.span<{ $issuperHost: boolean }>`
  position: relative;
  top: 0.25rem;
  display: inline-block;
  padding-left: ${({ $issuperHost }) => ($issuperHost ? '0.6rem' : '0')};
`;
