import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import { getDifferenceDate } from '../../pages/postReservation/utils/getDifferenceDate';
import { getDateBeforeDays } from '../../pages/postReservation/utils/getPaymentDay';
import Footer from './../../components/commons/footer/Footer';
import { DefaultHeader } from './../../components/commons/Header';
import PostReservationHeader from './components/header/PostReservationHeader';
import WrapLeftComponents from './components/left_side/WrapLeftComponents';
import InfoReservationCard from './components/right_side/InfoReservationCard';
import { API_Test } from './constatnts/apiTestText.ts';
import { extractMonthAndDay } from '../../pages/postReservation/utils/extractMonthAndDay';

const PostReservationPage = () => {
  const [checkInDate, setCheckInDate] = useState<string>('');

  const [checkOutDate, setCheckOutDate] = useState<string>('');
  const [daysDifference, setDaysDifference] = useState<number>('');
  const [paymentDate, setPaymentDate] = useState<string>('');

  const EditDate = () => {
    DifferenceIndays(API_Test.checkInDate, API_Test.checkOutDate);
    const { month: checkInmonth, day: checkInday } = extractMonthAndDay(API_Test.checkInDate);
    setCheckInDate(checkInmonth + '월 ' + checkInday + '일');
    const { day: checkOutday } = extractMonthAndDay(API_Test.checkOutDate);
    setCheckOutDate(checkOutday + '일');
    const paymentPeriod = getDateBeforeDays(API_Test.checkInDate);
    setPaymentDate(paymentPeriod);
  };

  const DifferenceIndays = (dateString1, dateString2) => {
    const daysDifference = getDifferenceDate(dateString1, dateString2);
    setDaysDifference(daysDifference);
  };

  useEffect(() => {
    EditDate();
  }, []);

  return (
    <>
      <DefaultHeader />
      <PostReservationWrapper>
        <PostReservationHeader />
        <PostReservationContentWrapper>
          <WrapLeftComponents
            checkInDate={checkInDate}
            checkOutDate={checkOutDate}
            daysDifference={daysDifference}
            paymentDate={paymentDate}
          />
          <InfoReservationCard price={API_Test.roomPrice} daysDifference={daysDifference} />
        </PostReservationContentWrapper>
      </PostReservationWrapper>

      <Footer />
    </>
  );
};

export default PostReservationPage;

const PostReservationWrapper = styled.div`
  width: 1366px;
  padding: 6rem 23.8rem 0 23.9rem;

  @media (width<=1046px) {
    position: absolute;
    left: 0;
  }
`;

const PostReservationContentWrapper = styled.div`
  display: grid;
  grid-template-rows: 140rem;
  grid-template-columns: repeat(2, 1fr);
`;
