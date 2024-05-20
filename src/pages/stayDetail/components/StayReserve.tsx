import styled from 'styled-components';

import { DiamondIcon, FlagIcon } from '../../../assets/svgs';
import { STAY_INFO } from '../constants';

const StayReserve = () => {
  return (
    <ReserveWrapper>
      <ReserveBox></ReserveBox>
      <ChanceBox>
        <DiamondIcon />
        <Title2>흔치 않은 기회</Title2>
        <Text>{STAY_INFO.hostName}님의 숙소는 보통 예약이 가득 차있습니다.</Text>
      </ChanceBox>
      <ReportBtn>
        <FlagIcon />
        <UnderLineText>숙소 신고하기</UnderLineText>
      </ReportBtn>
    </ReserveWrapper>
  );
};

export default StayReserve;

const ReserveWrapper = styled.section`
  width: 28.4rem;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  padding-top: 2.6rem;
`;

const ReserveBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 28.4rem;
  height: 40.3rem;
  margin-top: 2.6rem;
  padding: 2.4rem 2rem 2rem 1.6rem;

  box-shadow:

  border: 1px solid ${({ theme }) => theme.colors.gray400};
  border-radius: 10px;
`;

const ChanceBox = styled.div`
  width: 28.4rem;
  height: 7rem;
  margin-top: 1.2rem;
  padding: 2rem 1.2rem 1.8rem 2rem;

  border: 1px solid ${({ theme }) => theme.colors.gray400};
  border-radius: 10px;
`;

const Title2 = styled.h2`
  ${({ theme }) => theme.fonts.body02_heavy};
  color: ${({ theme }) => theme.colors.black};
`;

const Text = styled.p`
  ${({ theme }) => theme.fonts.body03_light};
  color: ${({ theme }) => theme.colors.black};
`;

const ReportBtn = styled.div`
  gap: 1.2rem;
  justify-content: center;
  width: 10.5rem;
  height: 2.4rem;
  margin-top: 1.2rem;
  padding: 0.6rem;
`;

const UnderLineText = styled.p`
  color: ${({ theme }) => theme.colors.black};
  ${({ theme }) => theme.fonts.body02_middle};
  border-bottom: 1px solid;
  border-color: ${({ theme }) => theme.colors.gray400};
`;
