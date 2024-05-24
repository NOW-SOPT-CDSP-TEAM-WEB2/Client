import styled from 'styled-components';

import StayMap from './StayMap';

interface LocationProps {
  lat: number;
  lng: number;
}

const Location = (props: LocationProps) => {
  const { lat, lng } = props;
  return (
    <LocationWrapper>
      <TitleContainer>
        <Title>숙소 위치</Title>
        <TitleDetail>Gandong-myeon, Hwacheon, 강원도, 한국</TitleDetail>
      </TitleContainer>
      <StayMap lat={lat} lng={lng} />
    </LocationWrapper>
  );
};

export default Location;

const LocationWrapper = styled.section`
  width: 100%;
  padding: 4rem 0;
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.2rem;
  align-items: flex-start;
  justify-content: center;
  margin-bottom: 1.6rem;
`;

const Title = styled.h2`
  color: ${({ theme }) => theme.colors.black};
  ${({ theme }) => theme.fonts.heading04};
`;
const TitleDetail = styled.span`
  color: ${({ theme }) => theme.colors.gray800};
  ${({ theme }) => theme.fonts.body02_middle};
`;
const Map = styled.div`
  width: 100%;
  height: 37.5rem;

  background-color: ${({ theme }) => theme.colors.blue400};
`;
