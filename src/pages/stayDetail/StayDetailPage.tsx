/* eslint-disable import/order */
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

import { client } from '../../utils/client';
import StayCalendar from './components/StayCalendar';
import StayFacility from './components/StayFacility';
import StayHeader from './components/StayHeader';
import StayInfo from './components/StayInfo';
import StayReserve from './components/StayReserve';
import StayRule from './components/StayRule';
import { getStayDetailType } from './types/getStayDetailType';

const StayDetailPage = () => {
  const [startDate, setStartDate] = useState<Date>(new Date());
  const [endDate, setEndDate] = useState<Date>(new Date());
  const [stayInfo, setStayInfo] = useState<getStayDetailType>({
    roomImageList: [''],
    roomLocation: '',
    roomRating: 0,
    isSuperHost: true,
    roomPrice: 0,
    latitude: 0,
    longitude: 0,
    roomDetail: {
      roomId: 0,
      roomName: '',
      roomInfo: {
        maxGuests: 0,
        bedrooms: 0,
        beds: 0,
        bathrooms: 0,
      },
      hostName: '',
      yearsOfHosting: 0,
      description: '',
    },
  });
  const { roomId } = useParams();

  const renderPage = async (roomId: number) => {
    try {
      const res = await client.get(`/api/v1/rooms/${roomId}`);
      // console.log(res.data);
      setStayInfo(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    renderPage(Number(roomId));
  }, [roomId]);

  return (
    <PageWrapper>
      <StayHeader roomName={stayInfo.roomDetail.roomName} />
      <ContentWrapper>
        <ColumnWrapper>
          <StayInfo />
          <StayRule />
          <StayFacility />
          <StayCalendar startDate={startDate} endDate={endDate} />
        </ColumnWrapper>
        <StayReserve startDate={startDate} endDate={endDate} setStartDate={setStartDate} setEndDate={setEndDate} />
      </ContentWrapper>
    </PageWrapper>
  );
};

export default StayDetailPage;

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ContentWrapper = styled.div`
  display: flex;
  gap: 7.3rem;
  padding: 0 25.6rem 3.2rem 0;
`;

const ColumnWrapper = styled.span`
  display: flex;
  flex-direction: column;
`;
