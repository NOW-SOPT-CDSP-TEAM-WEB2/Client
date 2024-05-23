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
}

const StayReserve = (props: StayReserveProps) => {
  const { roomId } = useParams();
  const navigate = useNavigate();
  const { startDate, endDate, setStartDate, setEndDate, roomPrice, roomDetail } = props;

  const getDateDifference = getStayDate(startDate, endDate);

  const { totalPrice, stayFee } = getStayFee(roomPrice, getDateDifference);
  const freeCancelDate = freeCancelationDate(startDate);

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
          <ReserveBtn onClick={() => navigate(`/postReservation/${roomId}`)}>예약하기</ReserveBtn>
        </ReserveBox>
        <PriceBox>
          <PriceConfirmText>예약 확정 전에는 요금이 청구되지 않습니다.</PriceConfirmText>
          <PriceCalTextBox>
            <PriceCalText>
              {getDateDifference ? (
                <>
                  ₩{roomPrice.toLocaleString()} x {getDateDifference}박
                </>
              ) : (
                <>₩{roomPrice.toLocaleString()} x 박</>
              )}
            </PriceCalText>{' '}
            <PriceSpan>₩{roomPrice.toLocaleString()}</PriceSpan>
          </PriceCalTextBox>
          <PriceCalTextBox>
            <PriceCalText>에어비앤비 서비스 수수료</PriceCalText>
            <PriceSpan>{stayFee ? <>₩{stayFee.toLocaleString()}</> : <>₩ 원</>}</PriceSpan>
          </PriceCalTextBox>
          <TotlaTextBox>
            <TotalText>총 합계</TotalText>
            <TotalNum>{totalPrice ? <>₩{totalPrice.toLocaleString()}</> : <>₩ 원</>}</TotalNum>
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
  width: 28.4rem;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  padding-top: 2.6rem;
`;
//예약하기 박스
const ReserveWrapper = styled.div`
  width: 28.4rem;
  gap: 1.4rem;
  display: flex;
  flex-direction: column;
  padding: 2.4rem 2rem 1.6rem 2rem;
  border: 1px solid ${({ theme }) => theme.colors.gray400};
  border-radius: 1rem;
`;
const ReserveBox = styled.div`
  width: 24.4rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
//가격 영역
const PriceTextBox = styled.span`
  width: 24.4rem;
  display: flex;
  margin-bottom: 2.4rem;
`;
const PriceText = styled.p`
  ${({ theme }) => theme.fonts.title01};
  color: ${({ theme }) => theme.colors.black};
`;
const PerDayText = styled.p`
  margin-left: 0.4rem;
  margin-top: 0.3rem;
  ${({ theme }) => theme.fonts.body02_middle};
  color: ${({ theme }) => theme.colors.black};
`;
//placeholder 영역
const ChooseDateBox = styled.div`
  display: flex;
  width: 24.4rem;
`;
const CheckInBox = styled.div`
  width: 12.2rem;
  padding: 1rem 0.8rem 1.2rem 0.8rem;
  border: 1px solid ${({ theme }) => theme.colors.gray600};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border-radius: 6px 0 0 0;
`;
const CheckOutBox = styled.div`
  width: 12.2rem;
  padding: 1rem 0.8rem 1.2rem 0.8rem;
  border: 1px solid ${({ theme }) => theme.colors.gray600};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border-radius: 0 6px 0 0;
`;
const ChooseDateText = styled.p`
  ${({ theme }) => theme.fonts.detail3};
  color: ${({ theme }) => theme.colors.black};
  width: 10.6rem;
  text-align: left;
  margin-bottom: 0.6rem;
`;
const GuestNumberBox = styled.div`
  width: 24.4rem;
  padding: 1rem 0.8rem 1rem 1rem;
  border: 1px solid ${({ theme }) => theme.colors.gray600};
  display: flex;
  border-radius: 0 0 6px 6px;
`;
const GuestNumerText = styled.span`
  display: flex;
  flex-direction: column;
  width: 20.2rem;
  gap: 0.2rem;
  align-items: flex-start;
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
  padding: 1.4rem;
  margin-top: 1.2rem;
  background-color: ${({ theme }) => theme.colors.pink400};
  border-radius: 6px;
  color: ${({ theme }) => theme.colors.white};
  ${({ theme }) => theme.fonts.body02_heavy};
`;
//상세 요금 영역
const PriceBox = styled.div`
  width: 24.4rem;
  display: flex;
  flex-direction: column;
`;
const PriceConfirmText = styled.p`
  ${({ theme }) => theme.fonts.body03_light};
  color: ${({ theme }) => theme.colors.black};
  text-align: center;
  margin-bottom: 2.6rem;
`;
//박당 가격 곱하기 총 일수
const PriceCalTextBox = styled.span`
  width: 24.4rem;
  margin-bottom: 1.6rem;
  display: flex;
  justify-content: space-between;
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
  width: 24.4rem;
  display: flex;
  justify-content: space-between;
  padding: 2rem 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray400};
  border-top: 1px solid ${({ theme }) => theme.colors.gray400};
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
  width: 24.4rem;
  display: flex;
  justify-content: space-between;
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
  width: 28.4rem;
  height: 7rem;
  margin-top: 1.2rem;
  padding: 2rem 1.2rem 2rem 1.8rem;
  gap: 1.2rem;

  border: 1px solid ${({ theme }) => theme.colors.gray400};
  border-radius: 10px;
`;
const TextSpan = styled.span`
  width: 21.8rem;
  display: flex;
  flex-direction: column;
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
  justify-content: center;
  align-items: center;
  gap: 1rem;
  width: 10.5rem;
  margin-top: 1.2rem;
  padding: 0.6rem;
  margin: 0 auto;
`;
const UnderLineText = styled.p`
  color: ${({ theme }) => theme.colors.black};
  ${({ theme }) => theme.fonts.body02_middle};
  border-bottom: 1px solid;
  border-color: ${({ theme }) => theme.colors.black};
`;
