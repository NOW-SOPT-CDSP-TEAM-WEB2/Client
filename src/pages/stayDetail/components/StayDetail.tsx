import styled from 'styled-components';

import Footer from '../../../components/commons/footer/Footer';
import { NavHeader } from '../../../components/commons/Header';
import Review from './Review';

const StayDetail = () => {
  return (
    <>
      <NavHeader />
      <StayDetailWrapper>
        <Review />
      </StayDetailWrapper>
      <Footer />
    </>
  );
};

export default StayDetail;

const StayDetailWrapper = styled.div`
  width: 1366px;
  margin-top: 6rem;
  padding: 0 25.6rem;
`;
