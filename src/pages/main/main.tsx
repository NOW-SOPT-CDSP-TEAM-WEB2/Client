import styled from 'styled-components';

import { DefaultHeader, HomeDefaultHeader, NavHeader, WishHeader } from '../../components/commons/Header';
import StayRule from '../stayDetail/components/StayRule';

const Main = () => {
  return (
    <TestContainer>
      <DefaultHeader />
      {/* <WishHeader /> */}
      {/* <HomeDefaultHeader /> */}
      {/* <NavHeader /> */}
      <StayRule />
    </TestContainer>
  );
};

export default Main;

const TestContainer = styled.div`
  width: 1366px;
`;
