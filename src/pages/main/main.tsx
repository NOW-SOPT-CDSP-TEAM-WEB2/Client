import styled from 'styled-components';

import Header from '../../components/commons/Header';

const Main = () => {
  return (
    <TestContainer>
      <Header />
    </TestContainer>
  );
};

export default Main;

const TestContainer = styled.div`
  width: 100%;
  height: 30rem;
  padding: 5.9rem;
`;

const Test = styled.div`
  height: 3rem;

  background-color: ${({ theme }) => theme.colors.blue400};
`;
