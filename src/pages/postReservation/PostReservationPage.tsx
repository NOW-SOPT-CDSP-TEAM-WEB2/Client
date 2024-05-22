import React from 'react';
import styled from 'styled-components';

import Footer from './../../components/commons/footer/Footer';
import { DefaultHeader } from './../../components/commons/Header';
import PostReservationHeader from './components/header/postReservationHeader';
import WrapLeftComponents from './components/left_side/WrapLeftComponents';
import InfoReservationCard from './components/right_side/InfoReservationCard';
import { API_Test } from './constatnts/apiTestText.ts';
import { useExtractDate } from './hooks/extractDate';

const PostReservationPage = () => {
  const { formattedCheckInDate, formattedCheckOutDate, daysDifference, paymentDate } = useExtractDate(
    API_Test.checkInDate,
    API_Test.checkOutDate
  );

  return (
    <>
      <DefaultHeader />
      <PostReservationWrapper>
        <PostReservationHeader />
        <PostReservationContentWrapper>
          <WrapLeftComponents
            checkInDate={formattedCheckInDate}
            checkOutDate={formattedCheckOutDate}
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
`;

const PostReservationContentWrapper = styled.div`
  display: grid;
  grid-template-rows: 140rem;
  grid-template-columns: repeat(2, 1fr);
`;
