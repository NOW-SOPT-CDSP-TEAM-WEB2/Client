import styled from 'styled-components';

import { LeafLeftIcon, LeafRightIcon } from '../../../assets/svgs';
import { STAY_INFO } from '../constants';

const StayInfo = () => {
  return (
    <InfoWrapper>
      <Title>{STAY_INFO.roomLocation}</Title>
      <InfoText>
        최대 인원 {STAY_INFO.roomInfo.maxGuests}명 • 침실 {STAY_INFO.roomInfo.bedrooms} • 침대 {STAY_INFO.roomInfo.beds}
        개 • 욕실 {STAY_INFO.roomInfo.bathrooms}개
      </InfoText>
      <RateWrapper>
        <RateBox>
          <PreferenceSpan>
            <LeafLeftIcon />
            {/*줄바꿈 튀어나오는 부분 정리하기*/}
            <TextDiv>
              <UpperText>게스트</UpperText>
              <LowerText>선호</LowerText>
            </TextDiv>
            <LeafRightIcon />
          </PreferenceSpan>
          <LovedText>에어비앤비 게스트에게 가장 사랑받는 숙소</LovedText>
          <RateSpan>{STAY_INFO.roomInfo.Rate}</RateSpan>
        </RateBox>
      </RateWrapper>
      {/* <HostInfoWrapper>

      </HostInfoWrapper> */}
    </InfoWrapper>
  );
};

export default StayInfo;

const InfoWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 49.8rem;
  padding-top: 2.6rem;
  padding-bottom: 3.2rem;

  border-bottom: 1px solid ${({ theme }) => theme.colors.gray400};
`;

const Title = styled.h1`
  color: ${({ theme }) => theme.colors.black};
  ${({ theme }) => theme.fonts.heading04};
`;

const InfoText = styled.p`
  margin-top: 1.2rem;

  color: ${({ theme }) => theme.colors.black};
  ${({ theme }) => theme.fonts.body02_middle};
`;

const RateWrapper = styled.div`
  width: 49.8rem;
  margin-top: 2.8rem;
  padding: 1.6rem 1.8rem;

  border: 1px solid ${({ theme }) => theme.colors.gray400};
  border-radius: 8px;
`;

const RateBox = styled.div`
  display: flex;
  gap: 0.4rem;
  align-items: center;
  justify-content: stretch;
  width: 40.2rem;
  padding-right: 2rem;

  border-right: 1px solid ${({ theme }) => theme.colors.gray400};
`;

const PreferenceSpan = styled.span`
  display: flex;
  flex-direction: row;
  width: 10.1rem;
  height: 3.2rem;
`;

const TextDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const UpperText = styled.p`
  color: ${({ theme }) => theme.colors.black};
  ${({ theme }) => theme.fonts.title02_middle};
`;

const LowerText = styled.p`
  color: ${({ theme }) => theme.colors.black};
  ${({ theme }) => theme.fonts.title02_middle};
`;

const LovedText = styled.p`
  color: ${({ theme }) => theme.colors.black};
  ${({ theme }) => theme.fonts.body02_middle};
`;
// const PreferenceText = styled.p`
//   ${({ theme }) => theme.fonts.title02_middle};
//   padding: 2rem 0;

//   white-space: pre-line;
// `;
