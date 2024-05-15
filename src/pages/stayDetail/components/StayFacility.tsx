import styled from 'styled-components';

import { BabyIcon, CarbonAlarmIcon, CarIcon, FireAlarmIcon, FireIcon, KitchenIcon, TvIcon } from '../../../assets/svgs';
import Divider from '../../../components/commons/Divider';

const StayFacility = () => {
  return (
    <StayFacilityWrapper>
      <Title>숙소 시설</Title>
      <GapSection>
        <InfoSection>
          <Text2>편의</Text2>
          <GapWrapper1>
            <RowWrapper>
              <KitchenIc />
              <TextBlack>주방</TextBlack>
            </RowWrapper>
            <RowWrapper>
              <CarIc />
              <TextBlack>건물 진입로 무료 주차</TextBlack>
            </RowWrapper>
            <RowWrapper>
              <FireIc />
              <TextBlack>화로</TextBlack>
            </RowWrapper>
            <RowWrapper>
              <TvIc />
              <TextGray>TV</TextGray>
            </RowWrapper>
          </GapWrapper1>
          <InfoBtn1>편의시설 9개 모두 보기</InfoBtn1>
        </InfoSection>
        <InfoSection>
          <Text2>안전</Text2>
          <GapWrapper2>
            <RowWrapper>
              <BabyIc />
              <TextGray>어린이와 유아에게 적합하지 않음</TextGray>
            </RowWrapper>
            <RowWrapper>
              <CarbonAlarmIc />
              <TextGray>일산화탄소 경보기</TextGray>
            </RowWrapper>
            <RowWrapper>
              <FireAlarmIc />
              <TextGray>화재경보기</TextGray>
            </RowWrapper>
          </GapWrapper2>
          <InfoBtn2>안전사항 자세히 보기</InfoBtn2>
        </InfoSection>
      </GapSection>
      <Divider />
    </StayFacilityWrapper>
  );
};

export default StayFacility;

const StayFacilityWrapper = styled.section`
  display: flex;
  flex-direction: column;
  width: 49.8rem;
  height: 32.5rem;
  padding-top: 4rem;
`;

const Title = styled.h1`
  margin-bottom: 3.2rem;

  color: ${({ theme }) => theme.colors.black};
  ${({ theme }) => theme.fonts.heading04};
  text-align: left;
`;

const GapSection = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 4rem;
`;

const InfoSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 24.3rem;
  height: 20rem;
`;

const Text2 = styled.p`
  margin-bottom: 1.6rem;
  ${({ theme }) => theme.fonts.title02_heavy};
  color: ${({ theme }) => theme.colors.black};
`;

const GapWrapper1 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  width: 24.3rem;
  height: 13.4rem;
`;
const GapWrapper2 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  width: 24.3rem;
  height: 7.8rem;
`;

const RowWrapper = styled.span`
  display: flex;
  width: 100%;
  height: 1.8rem;
`;

const TextBlack = styled.p`
  align-items: center;
  ${({ theme }) => theme.fonts.body02_middle};
  color: ${({ theme }) => theme.colors.black};
`;

const TextGray = styled.p`
  align-items: center;
  ${({ theme }) => theme.fonts.body02_middle};
  color: ${({ theme }) => theme.colors.gray700};
`;

const InfoBtn1 = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 14.8rem;
  height: 3.6rem;
  margin-top: 3rem;
  ${({ theme }) => theme.fonts.body02_middle};
  border: 1px solid ${({ theme }) => theme.colors.gray400};
  border-radius: 6px;
`;

const InfoBtn2 = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 14.8rem;
  height: 3.6rem;
  margin-top: 6rem;
  ${({ theme }) => theme.fonts.body02_middle};
  border: 1px solid ${({ theme }) => theme.colors.gray400};
  border-radius: 6px;
`;

//아이콘 선언
const KitchenIc = styled(KitchenIcon)`
  margin-right: 1.2rem;
  padding: 0;
`;

const CarIc = styled(CarIcon)`
  margin-right: 1.2rem;
  padding: 0;
`;

const FireIc = styled(FireIcon)`
  margin-right: 1.2rem;
  padding: 0;
`;

const TvIc = styled(TvIcon)`
  margin-right: 1.2rem;
  padding: 0;
`;

const BabyIc = styled(BabyIcon)`
  margin-right: 1.2rem;
  padding: 0;
`;

const CarbonAlarmIc = styled(CarbonAlarmIcon)`
  margin-right: 1.2rem;
  padding: 0;
`;

const FireAlarmIc = styled(FireAlarmIcon)`
  margin-right: 1.2rem;
  padding: 0;
`;
