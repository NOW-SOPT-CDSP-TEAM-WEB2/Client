/* eslint-disable simple-import-sort/imports */
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import Footer from './../../components/commons/footer/Footer';
import PostReservationHeader from './components/header/PostReservationHeader.tsx';
import WrapLeftComponents from './components/left_side/WrapLeftComponents';
import InfoReservationCard from './components/right_side/InfoReservationCard';
import { API_Test } from './constatnts/apiTestText.ts';
import { useExtractDate } from './hooks/useExtractDate';
import { postReserveInfo } from './utils/postReserveInfo';
import { DefaultHeader } from '../../components/commons/header/Header.tsx';

export interface inputValType {
  checkInDate: string;
  checkOutDate: string;
  headCount: number;
  messageToHost: string;
  roomId: number;
}

const PostReservationPage = () => {
  const navigate = useNavigate();

  const roomId = 2;
  const { formattedCheckInDate, formattedCheckOutDate, daysDifference, paymentDate } = useExtractDate(
    API_Test.checkInDate,
    API_Test.checkOutDate
  );

  const [inputVal, setInputVal] = useState({
    checkInDate: API_Test.checkInDate,
    checkOutDate: API_Test.checkOutDate,
    headCount: API_Test.headCount,
    messageToHost: '',
    roomId: roomId,
  });

  console.log(inputVal);

  const handlePost = async () => {
    const res = await postReserveInfo(inputVal);
    if (res) {
      if (confirm(res?.data.message)) navigate('/main');
    }
  };

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
            onClick={handlePost}
            inputVal={inputVal}
            setInputVal={setInputVal}
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