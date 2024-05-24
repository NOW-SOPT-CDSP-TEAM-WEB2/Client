/* eslint-disable import/order */
// import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';

import { ArrowBelowIcon, DiamondIcon, FlagIcon } from '../../../assets/svgs';
import { roomDetailType } from '../types/getStayDetailType';
import freeCancelationDate from '../utils/getFreeCancelationDate';
import { getStayDate } from '../utils/getStayDate';
import { getStayFee } from '../utils/stayFee';
import InputCalendar from './InputCalendar';

interface StayReserveProps {
  startDate: Date;
  endDate: Date;
  // eslint-disable-next-line no-unused-vars
  setStartDate: (date: Date) => void;
  // eslint-disable-next-line no-unused-vars
  setEndDate: (date: Date) => void;
  roomPrice: number;
  roomDetail: roomDetailType;
  isSuperHost: boolean;
  roomLocation: string;
  roomRating: number;
  roomThumb: string;
}

const StayReserve = (props: StayReserveProps) => {
  const { roomId } = useParams();
  const navigate = useNavigate();
  const {
    startDate,
    endDate,
    setStartDate,
    setEndDate,
    roomPrice,
    roomDetail,
    isSuperHost,
    roomLocation,
    roomRating,
    roomThumb,
  } = props;

  const getDateDifference = getStayDate(startDate, endDate);

  const { totalPrice, stayFee, totalPayPrice } = getStayFee(roomPrice, getDateDifference);
  const freeCancelDate = freeCancelationDate(startDate);

  const onClickReservation = () => {
    navigate(`/postReservation/${roomId}`, {
      state: {
        startDate: startDate,
        endDate: endDate,
        roomPrice: roomPrice,
        roomDetail: roomDetail,
        isSuperHost: isSuperHost,
        roomLocation: roomLocation,
        roomRating: roomRating,
        roomThumb: roomThumb,
      },
    });
  };

  return (
    <StayReservePage>
      <ReserveWrapper>
        <ReserveBox>
          <PriceTextBox>
            <PriceText>₩{roomPrice.toLocaleString()}</PriceText>
            <PerDayText>/박</PerDayText>
          </PriceTextBox>
          <ChooseDateBox>
            <CheckInBox>
              <ChooseDateText>체크인</ChooseDateText>
              <InputCalendar
                startDate={startDate}
                endDate={endDate}
                setStartDate={setStartDate}
                setEndDate={setEndDate}
              />
            </CheckInBox>
            <CheckOutBox>
              <ChooseDateText>체크아웃</ChooseDateText>
            </CheckOutBox>
          </ChooseDateBox>
          <GuestNumberBox>
            <GuestNumerText>
              <Text1>인원</Text1>
              <Text2>게스트 1명</Text2>
            </GuestNumerText>
            <ArrowBelowIc />
          </GuestNumberBox>
          <ReserveBtn onClick={onClickReservation}>예약하기</ReserveBtn>
        </ReserveBox>
        <PriceBox>
          <PriceConfirmText>예약 확정 전에는 요금이 청구되지 않습니다.</PriceConfirmText>
          <PriceCalTextBox>
            <PriceCalText>
              {endDate ? (
                <>
                  ₩{roomPrice.toLocaleString()} x {getDateDifference}박
                </>
              ) : (
                <>₩{roomPrice.toLocaleString()} x 박</>
              )}
            </PriceCalText>{' '}
            <PriceSpan>{endDate ? <>₩{totalPrice.toLocaleString()}</> : <>₩</>}</PriceSpan>
          </PriceCalTextBox>
          <PriceCalTextBox>
            <PriceCalText>에어비앤비 서비스 수수료</PriceCalText>
            <PriceSpan>{endDate ? <>₩{stayFee.toLocaleString()}</> : <>₩</>}</PriceSpan>
          </PriceCalTextBox>
          <TotlaTextBox>
            <TotalText>총 합계</TotalText>
            <TotalNum>{endDate ? <>₩{totalPayPrice.toLocaleString()}</> : <>₩</>}</TotalNum>
          </TotlaTextBox>
        </PriceBox>
        <FreeCancelation>
          <FreeCancleText>{freeCancelDate} 전까지 무료로 취소하실 수 있습니다.</FreeCancleText>
          <ViewMoreText>더보기</ViewMoreText>
        </FreeCancelation>
      </ReserveWrapper>
      <ChanceBox>
        <DiamondIcon />
        <TextSpan>
          <Title2>흔치 않은 기회</Title2>
          <Text>{roomDetail.hostName}님의 숙소는 보통 예약이 가득 차있습니다.</Text>
        </TextSpan>
      </ChanceBox>
      <ReportBtn>
        <FlagIcon />
        <UnderLineText>숙소 신고하기</UnderLineText>
      </ReportBtn>
    </StayReservePage>
  );
};

export default StayReserve;
//전체 컴포넌트
const StayReservePage = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  width: 28.4rem;
  padding-top: 2.6rem;
`;
//예약하기 박스
const ReserveWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.4rem;
  width: 28.4rem;
  padding: 2.4rem 2rem 1.6rem 2rem;

  border: 1px solid ${({ theme }) => theme.colors.gray400};
  border-radius: 1px;
`;
const ReserveBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 24.4rem;
`;
//가격 영역
const PriceTextBox = styled.span`
  display: flex;
  width: 24.4rem;
  margin-bottom: 2.4rem;
`;
const PriceText = styled.p`
  ${({ theme }) => theme.fonts.title01};
  color: ${({ theme }) => theme.colors.black};
`;
const PerDayText = styled.p`
  margin-top: 0.3rem;
  margin-left: 0.4rem;
  ${({ theme }) => theme.fonts.body02_middle};
  color: ${({ theme }) => theme.colors.black};
`;
//placeholder 영역
const ChooseDateBox = styled.div`
  display: flex;
  width: 24.4rem;
`;
const CheckInBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 12.2rem;
  padding: 1rem 0.8rem 1.2rem 0.8rem;

  border: 1px solid ${({ theme }) => theme.colors.gray600};
  border-radius: 6px 0 0 0;
`;
const CheckOutBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 12.2rem;
  padding: 1rem 0.8rem 1.2rem 0.8rem;

  border: 1px solid ${({ theme }) => theme.colors.gray600};
  border-radius: 0 6px 0 0;
`;
const ChooseDateText = styled.p`
  ${({ theme }) => theme.fonts.detail3};
  width: 10.6rem;
  margin-bottom: 0.6rem;

  color: ${({ theme }) => theme.colors.black};
  text-align: left;
`;
const GuestNumberBox = styled.div`
  display: flex;
  width: 24.4rem;
  padding: 1rem 0.8rem 1rem 1rem;

  border: 1px solid ${({ theme }) => theme.colors.gray600};
  border-radius: 0 0 6px 6px;
`;
const GuestNumerText = styled.span`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  align-items: flex-start;
  width: 20.2rem;
`;
const Text1 = styled.p`
  ${({ theme }) => theme.fonts.detail3};
  color: ${({ theme }) => theme.colors.black};
`;
const Text2 = styled.p`
  ${({ theme }) => theme.fonts.detail1_middle};
  color: ${({ theme }) => theme.colors.black};
`;
const ArrowBelowIc = styled(ArrowBelowIcon)`
  margin-top: 0.3rem;
`;
const ReserveBtn = styled.button`
  width: 24.4rem;
  margin-top: 1.2rem;
  padding: 1.4rem;

  color: ${({ theme }) => theme.colors.white};

  background-color: ${({ theme }) => theme.colors.pink400};
  border-radius: 6px;

  ${({ theme }) => theme.fonts.body02_heavy};
`;
//상세 요금 영역
const PriceBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 24.4rem;
`;
const PriceConfirmText = styled.p`
  margin-bottom: 2.6rem;

  ${({ theme }) => theme.fonts.body03_light};
  color: ${({ theme }) => theme.colors.black};
  text-align: center;
`;
//박당 가격 곱하기 총 일수
const PriceCalTextBox = styled.span`
  display: flex;
  justify-content: space-between;
  width: 24.4rem;
  margin-bottom: 1.6rem;
`;
const PriceCalText = styled.span`
  ${({ theme }) => theme.fonts.body02_middle};
  color: ${({ theme }) => theme.colors.black};

  border-bottom: 1px solid ${({ theme }) => theme.colors.black};
`;
const PriceSpan = styled.span`
  ${({ theme }) => theme.fonts.body02_middle};
  color: ${({ theme }) => theme.colors.black};
`;
const TotlaTextBox = styled.span`
  display: flex;
  justify-content: space-between;
  width: 24.4rem;
  padding: 2rem 0;

  border-top: 1px solid ${({ theme }) => theme.colors.gray400};
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray400};
`;

const TotalText = styled.p`
  ${({ theme }) => theme.fonts.body02_heavy};
  color: ${({ theme }) => theme.colors.black};
`;

const TotalNum = styled.p`
  ${({ theme }) => theme.fonts.body02_heavy};
  color: ${({ theme }) => theme.colors.black};
`;
const FreeCancelation = styled.span`
  display: flex;
  justify-content: space-between;
  width: 24.4rem;
  padding: 0.8rem 0;
`;
const FreeCancleText = styled.p`
  ${({ theme }) => theme.fonts.body03_light};
  color: ${({ theme }) => theme.colors.black};
`;
const ViewMoreText = styled.p`
  ${({ theme }) => theme.fonts.body03_middle};
  color: ${({ theme }) => theme.colors.black};

  border-bottom: 1px solid ${({ theme }) => theme.colors.black};
`;

//흔치 않은 기회 박스
const ChanceBox = styled.div`
  display: flex;
  gap: 1.2rem;
  width: 28.4rem;
  height: 7rem;
  margin-top: 1.2rem;
  padding: 2rem 1.2rem 2rem 1.8rem;

  border: 1px solid ${({ theme }) => theme.colors.gray400};
  border-radius: 10px;
`;
const TextSpan = styled.span`
  display: flex;
  flex-direction: column;
  width: 21.8rem;
`;
const Title2 = styled.h2`
  ${({ theme }) => theme.fonts.body02_heavy};
  color: ${({ theme }) => theme.colors.black};
`;
const Text = styled.p`
  ${({ theme }) => theme.fonts.body03_light};
  color: ${({ theme }) => theme.colors.black};
`;

//신고하기 박스
const ReportBtn = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  justify-content: center;
  width: 10.5rem;
  margin: 0 auto;
  margin-top: 1.2rem;
  padding: 0.6rem;
`;
const UnderLineText = styled.p`
  color: ${({ theme }) => theme.colors.black};
  ${({ theme }) => theme.fonts.body02_middle};
  border-color: ${({ theme }) => theme.colors.black};
  border-bottom: 1px solid;
`;
