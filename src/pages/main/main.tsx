import styled from 'styled-components';

import { DefaultHeader } from '../../components/commons/Header';

const Main = () => {
  return (
    <TestContainer>
      <DefaultHeader />
    </TestContainer>
  );
};

export default Main;

const TestContainer = styled.div`
  width: 1366px;
`;
