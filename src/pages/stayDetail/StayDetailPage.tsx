/* eslint-disable import/order */
import { useEffect, useState } from 'react';
import { Dispatch, SetStateAction } from 'react';
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

interface StayDetailPageProps {
  stayInfo: getStayDetailType;
  setStayInfo: Dispatch<SetStateAction<getStayDetailType>>;
}

const StayDetailPage = (props: StayDetailPageProps) => {
  const { stayInfo, setStayInfo } = props;
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
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
      <StayHeader roomName={stayInfo.roomDetail.roomName} roomImageList={stayInfo.roomImageList} />
      <ContentWrapper>
        <ColumnWrapper>
          <StayInfo
            roomLocation={stayInfo.roomLocation}
            roomInfo={stayInfo.roomDetail.roomInfo}
            roomRate={stayInfo.roomRating}
            roomDetail={stayInfo.roomDetail}
            isSuperHost={stayInfo.isSuperHost}
          />
          <StayRule roomInfo={stayInfo.roomDetail.roomInfo} />
          <StayFacility />
          <StayCalendar
            startDate={startDate}
            endDate={endDate}
            roomDetail={stayInfo.roomDetail}
            roomLocation={stayInfo.roomLocation}
          />
        </ColumnWrapper>
        <StayReserve
          startDate={startDate}
          endDate={endDate}
          setStartDate={setStartDate}
          setEndDate={setEndDate}
          roomPrice={stayInfo.roomPrice}
          roomDetail={stayInfo.roomDetail}
          isSuperHost={stayInfo.isSuperHost}
        />
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
  width: 100%;
  padding: 0 25.6rem 3.2rem 0;
`;

const ColumnWrapper = styled.span`
  display: flex;
  flex-direction: column;
`;
