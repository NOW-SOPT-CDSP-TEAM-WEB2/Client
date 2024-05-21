import styled from 'styled-components';

import Footer from '../../components/commons/footer/Footer';
import CarouselWrapperComponent from './../../components/commons/carousel/CarouselWrapperComponent';

const Main = () => {
  return (
    <TestContainer>
      <CarouselWrapperComponent />
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
