import styled from 'styled-components';

import { DefaultHeader, ProfileHeader } from '../../components/commons/Header';

const Main = () => {
  return (
    <TestContainer>
      <ProfileHeader />
    </TestContainer>
  );
};

export default Main;

const TestContainer = styled.div`
  width: 1366px;
`;
