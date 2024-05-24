/* eslint-disable simple-import-sort/imports */
import styled from 'styled-components';

import AccomodationCard from './AccomodationCard';
import { InfoReservationCardContent } from '../../constatnts/PostResevationText.ts';
import { postReservationDataType } from '../../types/postReservationDataType.ts';
import { getPrice } from '../../utils/getPrice.ts';

interface InfoReservationCardProps {
  locationVal: postReservationDataType;
  daysDifference: number;
}

const InfoReservationCard = (props: InfoReservationCardProps) => {
  const { locationVal, daysDifference } = props;
  const { detailPrice, commissionFee, totalPrice } = getPrice(locationVal.roomPrice, daysDifference);

  return (
    <>
      <InfoReservationCardWrapper>
        <AccomodationCard
          roomName={locationVal.roomName}
          description={locationVal.roomName}
          isSuperHost={locationVal.isSuperHost}
          roomRating={locationVal.roomRating}
          roomThumb={locationVal.roomThumb}
        />
        <PriceInfoWrapper>
          <PriceTitle>{InfoReservationCardContent.title}</PriceTitle>
          <PriceWrapper>
            <PriceLabel>
              ₩{locationVal.roomPrice.toLocaleString()} X {daysDifference}박
            </PriceLabel>
            <PriceLabel>₩{detailPrice.toLocaleString()}</PriceLabel>
          </PriceWrapper>
          <PriceWrapper>
            <PriceUnderLineLabel>{InfoReservationCardContent.content}</PriceUnderLineLabel>
            <PriceLabel>₩{commissionFee.toLocaleString()}</PriceLabel>
          </PriceWrapper>
        </PriceInfoWrapper>
        <PriceTotalWrapper>
          <PrcieTotalTxtLabelWrapper>
            <PriceTotalLabel>총 합계</PriceTotalLabel>
            <PriceTotalUnderLineLabel>
              {'('}KRW{')'}
            </PriceTotalUnderLineLabel>
          </PrcieTotalTxtLabelWrapper>
          <PriceTotalLabel>₩{totalPrice.toLocaleString()}</PriceTotalLabel>
        </PriceTotalWrapper>
        <AdditionalTxt>{InfoReservationCardContent.infotxt}</AdditionalTxt>
      </InfoReservationCardWrapper>
    </>
  );
};

export default InfoReservationCard;

const InfoReservationCardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 35.8rem;
  height: 37rem;
  padding: 2rem 1.8rem;

  border: 1px solid ${({ theme }) => theme.colors.gray400};
  border-radius: 8px;
`;

const PriceInfoWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 2.4rem 0 2.4rem 0;

  border-top: 1px solid ${({ theme }) => theme.colors.gray400};
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray400};
`;

const PriceTitle = styled.p`
  color: ${({ theme }) => theme.colors.black};
  ${({ theme }) => theme.fonts.heading04};
`;

const PriceWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
  padding-top: 1rem;
`;
const PriceLabel = styled.p`
  ${({ theme }) => theme.fonts.body01_middle};
`;
const PrcieTotalTxtLabelWrapper = styled.div`
  display: flex;
`;
const PriceUnderLineLabel = styled.p`
  ${({ theme }) => theme.fonts.body01_light};
  border-bottom: 1px solid ${({ theme }) => theme.colors.black};
`;

const PriceTotalWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
  padding: 2rem 0 2rem 0;

  border-bottom: 1px solid ${({ theme }) => theme.colors.gray400};
`;

const PriceTotalLabel = styled.p`
  ${({ theme }) => theme.fonts.body01_heavy};
`;

const PriceTotalUnderLineLabel = styled.p`
  ${({ theme }) => theme.fonts.body01_heavy};
  border-bottom: 1px solid ${({ theme }) => theme.colors.black};
`;

const AdditionalTxt = styled.p`
  padding: 2rem 0 0.8rem 0;
  ${({ theme }) => theme.fonts.body03_middle};
`;
