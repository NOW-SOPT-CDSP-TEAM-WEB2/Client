import { useState } from 'react';
import styled from 'styled-components';

import HostDetail from './components/HostDetail';
import Layout from './components/Layout';
import Location from './components/Location';
import Review from './components/Review';
import StayDetailPage from './StayDetailPage';
import { getStayDetailType } from './types/getStayDetailType';

const StayDetailCombine = () => {
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

  return (
    <Layout>
      <StayDetailWrapper>
        <StayDetailPage stayInfo={stayInfo} setStayInfo={setStayInfo} />
        <Review />
        <Location lat={stayInfo.latitude} lng={stayInfo.longitude} />
        <HostDetail
          hostName={stayInfo.roomDetail.hostName}
          isSuperHost={stayInfo.isSuperHost}
          roomRating={stayInfo.roomRating}
          yearsOfHosting={stayInfo.roomDetail.yearsOfHosting}
        />
      </StayDetailWrapper>
    </Layout>
  );
};

export default StayDetailCombine;

const StayDetailWrapper = styled.div`
  width: 1366px;
  margin-top: 6rem;
  padding: 0 25.6rem;
`;
