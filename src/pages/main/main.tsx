import styled from 'styled-components';

import Footer from '../../components/commons/footer/Footer';

const Main = () => {
  return (
    <TestContainer>
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
