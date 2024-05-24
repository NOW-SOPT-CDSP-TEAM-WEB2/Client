/* eslint-disable simple-import-sort/imports */
import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import styled from 'styled-components';

import Footer from './../../components/commons/footer/Footer';
import PostReservationHeader from './components/header/PostReservationHeader.tsx';
import WrapLeftComponents from './components/left_side/WrapLeftComponents';
import InfoReservationCard from './components/right_side/InfoReservationCard';
import { postReserveInfo } from './hooks/postReservation';
import { useExtractDate } from './hooks/useExtractDate';
// import { postReserveInfo } from './utils/postReserveInfo';
import { convertToYYYYMMDD } from './utils/convertDateToForamt.ts';
import { DefaultHeader } from '../../components/commons/header/Header.tsx';

export interface inputValType {
  checkInDate: string;
  checkOutDate: string;
  headCount: number;
  messageToHost: string;
}

const PostReservationPage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [locationVal, setLocationVal] = useState({
    roomName: '',
    roomLocation: '',
    hostName: '',
    isSuperHost: true,
    yearsOfHosting: 0,
    roomPrice: 0,
    roomRating: 0,
    checkInDate: '',
    checkOutDate: '',
    roomThumb: '',
  });

  const { formattedCheckInDate, formattedCheckOutDate, daysDifference, paymentDate } = useExtractDate(
    convertToYYYYMMDD(location.state.startDate),
    convertToYYYYMMDD(location.state.endDate)
  );

  useEffect(() => {
    const convertedInDate = convertToYYYYMMDD(location.state.startDate);
    const convertedOutDate = convertToYYYYMMDD(location.state.endDate);
    setLocationVal({
      roomName: location.state.roomDetail.roomName,
      roomLocation: location.state.roomLocation,
      hostName: location.state.roomDetail.hostName,
      isSuperHost: location.state.isSuperHost,
      yearsOfHosting: location.state.roomDetail.yearsOfHosting,
      roomPrice: location.state.roomPrice,
      roomRating: location.state.roomRating,
      checkInDate: convertedInDate,
      checkOutDate: convertedOutDate,
      roomThumb: location.state.roomThumb,
    });
  }, [location.state.roomName, location.state.endDate, location.state.roomThumb]);

  const [inputVal, setInputVal] = useState({
    checkInDate: locationVal.checkInDate,
    checkOutDate: locationVal.checkOutDate,
    headCount: 1,
    messageToHost: '',
  });

  const handlePost = async () => {
    const res = await postReserveInfo(inputVal, location.state.roomDetail.roomId);
    // console.log(res);
    if (res) {
      if (confirm(res?.data.message)) navigate('/');
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
            locationVal={locationVal}
          />
          <InfoReservationCard locationVal={locationVal} daysDifference={daysDifference} />
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
