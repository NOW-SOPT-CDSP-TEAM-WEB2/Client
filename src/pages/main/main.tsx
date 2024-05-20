import styled from 'styled-components';

import Footer from '../../components/commons/footer/Footer';
// import { DefaultHeader, HomeDefaultHeader, NavHeader, WishHeader } from '../../components/commons/Header';
import StayRule from '../stayDetail/components/StayRule';

const Main = () => {
  return (
    <TestContainer>
      <Footer />
      {/* <DefaultHeader /> */}
      {/* <WishHeader /> */}
      {/* <HomeDefaultHeader /> */}
      {/* <NavHeader /> */}
      <StayRule />
    </TestContainer>
  );
};

export default Main;

const TestContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1366px;
`;
