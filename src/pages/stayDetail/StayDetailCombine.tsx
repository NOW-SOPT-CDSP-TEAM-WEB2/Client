import styled from 'styled-components';

import HostDetail from './components/HostDetail';
import Layout from './components/Layout';
import Location from './components/Location';
import Review from './components/Review';
import StayDetailPage from './StayDetailPage';

const StayDetailCombine = () => {
  return (
    <Layout>
      <StayDetailWrapper>
        <StayDetailPage />
        <Review />
        <Location />
        <HostDetail />
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
