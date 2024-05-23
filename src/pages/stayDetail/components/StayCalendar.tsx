/* eslint-disable import/order */
import styled from 'styled-components';

import { KeyboardIcon } from '../../../assets/svgs';
import { roomDetailType } from '../types/getStayDetailType';
import formatDateWithDots from '../utils/getDateInKor';
import OutputCalendar from './OutputCalendar';

interface StayCaledarProps {
  startDate: Date;
  endDate: Date;
  roomLocation: string;
  roomDetail: roomDetailType;
}

const StayCalendar = (props: StayCaledarProps) => {
  const { startDate, endDate, roomLocation, roomDetail } = props;
  const finalDateInKor = formatDateWithDots(startDate);
  const finalDateInKor2 = formatDateWithDots(endDate);
  return (
    <CalendarPageWrapper>
      <CalendarTextBox>
        <StayName>
          {roomLocation}, {roomDetail.roomName}
        </StayName>
        <StayDate>
          {finalDateInKor}
          {endDate ? ' - ' : null}
          {finalDateInKor2}
        </StayDate>
        <OutputCalendarWrapper>
          <OutputCalendar startDate={startDate} type="start" />
          <OutputCalendar endDate={endDate} type="end" />
        </OutputCalendarWrapper>
      </CalendarTextBox>
      <IconBox>
        <KeyboardIc />
        <TextBox>
          <DeleteText>날짜 지우기</DeleteText>
        </TextBox>
      </IconBox>
    </CalendarPageWrapper>
  );
};

export default StayCalendar;

const CalendarPageWrapper = styled.div`
  width: 49.8rem;
  display: flex;
  flex-direction: column;
  padding-top: 4rem;
`;
//캘린더 상단 영역
const CalendarTextBox = styled.span`
  width: 49.8rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
const StayName = styled.p`
  ${({ theme }) => theme.fonts.heading04};
  color: ${({ theme }) => theme.colors.black};
`;

const StayDate = styled.p`
  ${({ theme }) => theme.fonts.body02_middle};
  color: ${({ theme }) => theme.colors.gray800};
`;

//캘린더 영역

//캘린더 하단 영역
const IconBox = styled.span`
  width: 49.8rem;
  margin-top: 1.8rem;
  display: flex;
  justify-content: space-between;
`;

const KeyboardIc = styled(KeyboardIcon)`
  margin: 0.8rem;
`;
const TextBox = styled.span`
  width: 7.1rem;
  padding: 0.8rem 1rem;
`;
const DeleteText = styled.p`
  ${({ theme }) => theme.fonts.body03_middle};
  color: ${({ theme }) => theme.colors.black};
  border-bottom: 1px solid ${({ theme }) => theme.colors.black};
`;

const OutputCalendarWrapper = styled.span`
  display: flex;
  flex-direction: row;
  width: 49.8rem;
  gap: 2rem;
`;
