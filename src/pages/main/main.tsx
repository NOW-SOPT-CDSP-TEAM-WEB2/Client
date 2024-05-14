import styled from 'styled-components';

import Footer from '../../components/commons/header/footer/Footer';
import { DefaultHeader, HomeDefaultHeader, NavHeader, WishHeader } from '../../components/commons/header/Header';

const Main = () => {
  return (
    <TestContainer>
      <DefaultHeader />
      {/* <WishHeader /> */}
      {/* <HomeDefaultHeader /> */}
      {/* <NavHeader /> */}
      <Footer />
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
