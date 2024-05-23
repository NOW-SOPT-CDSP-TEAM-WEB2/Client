/* eslint-disable import/order */
import styled from 'styled-components';

import { ClockIcon, DogIcon, PartyIcon, PeopleIcon, SmokeIcon } from '../../../assets/svgs';
import { roomInfoType } from '../types/getStayDetailType';
import Divider from './Divider';

interface StayRuleProps {
  roomInfo: roomInfoType;
}

const StayRule = (props: StayRuleProps) => {
  const { roomInfo } = props;
  return (
    <StayRuleWrapper>
      <Title>숙소 이용규칙</Title>
      <CheckInOutSection>
        <TimeSection>
          <ClockIc />
          <RowWrapper>
            <Text>체크인 시간</Text>
            <Time>오후 3:00~오후 9:00</Time>
          </RowWrapper>
        </TimeSection>
        <TimeSection>
          <ClockIc />
          <RowWrapper>
            <Text>체크아웃 시간</Text>
            <Time>오전 11:00 전까지</Time>
          </RowWrapper>
        </TimeSection>
      </CheckInOutSection>
      <DuringStay>
        <Title2>숙박 중</Title2>
        <RuleList>
          <ColumnWrapper>
            <PeopleIcon />
            {/* n명에 api 붙여야함 */}
            <Text2>게스트 정원 {roomInfo.maxGuests}명</Text2>
          </ColumnWrapper>
          <Divider />
          <ColumnWrapper>
            <DogIcon />
            <Text3>반려동물 동반 불가</Text3>
          </ColumnWrapper>
          <Divider />
          <ColumnWrapper>
            <PartyIcon />
            <Text3>파티나 이벤트 금지</Text3>
          </ColumnWrapper>
          <Divider />
          <ColumnWrapper>
            <SmokeIcon />
            <Text3>흡연 금지</Text3>
          </ColumnWrapper>
        </RuleList>
        <SeeMoreBtn>이용규칙 전체보기</SeeMoreBtn>
      </DuringStay>
      <Divider />
    </StayRuleWrapper>
  );
};

export default StayRule;

//체크인 아웃
const StayRuleWrapper = styled.section`
  display: flex;
  flex-direction: column;
  width: 49.8rem;
  height: 54.5rem;
`;

const Title = styled.h1`
  margin-top: 4rem;

  color: ${({ theme }) => theme.colors.black};
  ${({ theme }) => theme.fonts.heading04};
  text-align: left;
`;

const CheckInOutSection = styled.div`
  display: flex;
  gap: 1.4rem;
  width: 49.8rem;
  height: 5.8rem;
  margin-top: 2.4rem;
`;

const TimeSection = styled.span`
  display: flex;
  flex-direction: row;
  width: 24.2rem;
  height: 5.8rem;
  margin: 0;
  padding: 1.3rem 0;

  border: 1px solid ${({ theme }) => theme.colors.gray400};
  border-radius: 6px;
`;

const Text = styled.p`
  color: ${({ theme }) => theme.colors.black};
  ${({ theme }) => theme.fonts.body02_heavy};
`;

const Time = styled.p`
  color: ${({ theme }) => theme.colors.gray800};
  ${({ theme }) => theme.fonts.detail1_middle}
`;

const RowWrapper = styled.span`
  display: flex;
  flex-direction: column;
  width: 17.4rem;
  height: 2.6rem;
  margin-left: 0.8rem;
`;
//숙박 중
const DuringStay = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 49.8rem;
  margin-top: 1.6rem;
  margin-bottom: 4rem;
  padding: 2.4rem 1.8rem 2rem 1.4rem;

  border: 1px solid ${({ theme }) => theme.colors.gray400};
  border-radius: 6px;
`;

const Title2 = styled.h2`
  margin-bottom: 2rem;
  margin-left: 0.6rem;
  ${({ theme }) => theme.fonts.title02_heavy};
  color: ${({ theme }) => theme.colors.black};
`;

const RuleList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  width: 46.6rem;
  height: 22.4rem;
`;

const ColumnWrapper = styled.span`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Text2 = styled.p`
  margin-left: 0.8rem;
  ${({ theme }) => theme.fonts.body02_middle};
  color: ${({ theme }) => theme.colors.black};
`;

const Text3 = styled.p`
  margin-left: 0.8rem;
  ${({ theme }) => theme.fonts.body02_middle};
  color: ${({ theme }) => theme.colors.gray700};
`;

const SeeMoreBtn = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 14.9rem;
  height: 3.6rem;
  margin-top: 2rem;
  margin-left: 0.4rem;
  padding: 1.4rem 2.75rem;
  ${({ theme }) => theme.fonts.body02_middle};
  color: ${({ theme }) => theme.colors.black};

  border: 1px solid ${({ theme }) => theme.colors.gray400};
  border-radius: 6px;
`;

//아이콘 선언
const ClockIc = styled(ClockIcon)`
  margin-left: 1.4rem;
  padding: 0;
`;
