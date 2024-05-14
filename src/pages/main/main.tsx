import styled from 'styled-components';

import { DefaultHeader, HomeDefaultHeader, NavHeader, WishHeader } from '../../components/commons/Header';

const Main = () => {
  return (
    <TestContainer>
      <DefaultHeader />
      {/* <WishHeader /> */}
      {/* <HomeDefaultHeader /> */}
      {/* <NavHeader /> */}
    </TestContainer>
  );
};

export default Main;

const TestContainer = styled.div`
  width: 1366px;
`;
