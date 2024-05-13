import styled from 'styled-components';

const Main = () => {
  return (
    <TestContainer>
      <Test>안녕하세요</Test>
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
