/* eslint-disable simple-import-sort/imports */
import styled from 'styled-components';

import Location from './Location';
import Review from './Review';
import Footer from '../../../components/commons/footer/Footer';
import { NavHeader } from '../../../components/commons/Header';

const StayDetail = () => {
  return (
    <>
      <NavHeader />
      <StayDetailWrapper>
        <Review />
        <Location />
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
