import styled from 'styled-components';

import { DefaultHeader, HomeDefaultHeader, NavHeader, ProfileHeader } from '../../components/commons/Header';

const Main = () => {
  return (
    <TestContainer>
      {/* <DefaultHeader /> */}
      {/* <ProfileHeader /> */}
      {/* <HomeDefaultHeader /> */}
      <NavHeader />
    </TestContainer>
  );
};

export default Main;

const TestContainer = styled.div`
  width: 1366px;
`;
