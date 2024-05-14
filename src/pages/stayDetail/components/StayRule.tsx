import styled from 'styled-components';

import { ClockIcon } from '../../../assets/svgs';

const StayRule = () => {
  return (
    <StayRuleWrapper>
      <Title>숙소 이용규칙</Title>
      <CheckInOutSection>
        <CheckInTime>
          <ClockIc />
          <RowWrapper>
            <Text>체크인 시간</Text>
            <Time>오후 3:00~오후 9:00</Time>
          </RowWrapper>
        </CheckInTime>
        <CheckOutTime>
          <ClockIc />
          <RowWrapper>
            <Text>체크아웃 시간</Text>
            <Time>오전 11:00 전까지</Time>
          </RowWrapper>
        </CheckOutTime>
      </CheckInOutSection>
    </StayRuleWrapper>
  );
};

export default StayRule;

const StayRuleWrapper = styled.section`
  display: flex;
  flex-direction: column;
  width: 498px;
  height: 545px;
`;

const Title = styled.h1`
  margin-top: 40px;

  color: ${({ theme }) => theme.colors.black};
  font-size: 18px;
  ${({ theme }) => theme.fonts.heading01};
  line-height: 18px;
  text-align: left;
`;

const CheckInOutSection = styled.div`
  display: flex;
  flex-direction: row;
  width: 498px;
  height: 58px;
  margin-top: 24px;
`;

const CheckInTime = styled.span`
  display: flex;
  flex-direction: row;
  width: 242px;
  height: 58px;
  margin: 0;
  padding: 13px 0;

  border: 1px solid ${({ theme }) => theme.colors.gray400};
  border-radius: 6px;
`;

const CheckOutTime = styled.span`
  right: 0;
  display: flex;
  flex-direction: row;
  width: 242px;
  height: 58px;
  margin: 0;
  margin-left: 14px;
  padding: 13px 0;

  border: 1px solid ${({ theme }) => theme.colors.gray400};
  border-radius: 6px;
`;

const Text = styled.p`
  color: ${({ theme }) => theme.colors.black};
  font-size: 12px;
  ${({ theme }) => theme.fonts.body02_heavy};
  line-height: 16.8px;
`;

const Time = styled.p`
  color: ${({ theme }) => theme.colors.gray800};
  font-size: 10px;
  line-height: 4px;
  ${({ theme }) => theme.fonts.detail1_middle}
`;

const RowWrapper = styled.span`
  display: flex;
  flex-direction: column;
  width: 174px;
  height: 26px;
  margin-left: 8px;
`;

const ClockIc = styled(ClockIcon)`
  margin-left: 14px;
  padding: 0;
`;
