import { useState } from 'react';
import styled from 'styled-components';

import StayCalendar from './components/StayCalendar';
import StayFacility from './components/StayFacility';
import StayHeader from './components/StayHeader';
import StayInfo from './components/StayInfo';
import StayReserve from './components/StayReserve';
import StayRule from './components/StayRule';

const StayDetailPage = () => {
  const [startDate, setStartDate] = useState<Date>();
  const [endDate, setEndDate] = useState<Date>();
  return (
    <PageWrapper>
      <StayHeader />
      <ContentWrapper>
        <ColumnWrapper>
          <StayInfo />
          <StayRule />
          <StayFacility />
          <StayCalendar startDate={startDate} endDate={endDate} setStartDate={setStartDate} setEndDate={setEndDate} />
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
