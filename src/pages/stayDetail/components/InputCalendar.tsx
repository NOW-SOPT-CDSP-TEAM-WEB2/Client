import 'react-datepicker/dist/react-datepicker.css';

// import { useState } from 'react';
import DatePicker from 'react-datepicker';
import styled from 'styled-components';

interface CaledarProps {
  startDate: Date;
  endDate: Date;
  // eslint-disable-next-line no-unused-vars
  setStartDate: (date: Date) => void;
  // eslint-disable-next-line no-unused-vars
  setEndDate: (date: Date) => void;
}

const InputCalendar = (props: CaledarProps) => {
  const { startDate, endDate, setStartDate, setEndDate } = props;
  const handleStartDateChange = (date: Date) => {
    setStartDate(date);
  };
  const handleEndDateChange = (date: Date) => {
    setEndDate(date);
  };

  return (
    <Wrapper>
      <DateBox1>
        <StyledDatePicker
          shouldCloseOnSelect // 날짜를 선택하면 datepicker가 자동으로 닫힘
          closeOnScroll={true} // 스크롤을 움직였을 때 자동으로 닫히도록 설정 기본값 false
          dateFormat="yyyy. M. d." //날짜 형태
          minDate={new Date('2024-01-01')} // minDate 이전 날짜 선택 불가
          maxDate={new Date('2100-01-01')} // maxDate 이후 날짜 선택 불가
          selected={startDate}
          onChange={handleStartDateChange}
          placeholderText="0000-00-00"
        />
      </DateBox1>
      <DateBox2>
        <StyledDatePicker
          shouldCloseOnSelect // 날짜를 선택하면 datepicker가 자동으로 닫힘
          closeOnScroll={true} // 스크롤을 움직였을 때 자동으로 닫히도록 설정 기본값 false
          minDate={new Date('2024-01-01')} // minDate 이전 날짜 선택 불가
          maxDate={new Date('2100-01-01')} // maxDate 이후 날짜 선택 불가
          selected={endDate}
          onChange={handleEndDateChange}
          placeholderText="0000-00-00"
          dateFormat="yyyy. M. d."
        />
      </DateBox2>
    </Wrapper>
  );
};

export default InputCalendar;

const StyledDatePicker = styled(DatePicker)`
  width: 10.6rem;
  height: 1.2rem;
  ${({ theme }) => theme.fonts.detail1_middle};
  color: ${({ theme }) => theme.colors.black};

  border: none;
  background-color: transparent;

  .react-datepicker__current-month {
    background-color: ${({ theme }) => theme.colors.pink200};
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1.5rem;
`;

const DateBox1 = styled.span`
  width: 10.6rem;
  height: 1.2rem;
  ${({ theme }) => theme.fonts.detail1_middle};
  border-color: ${({ theme }) => theme.colors.white};
`;
const DateBox2 = styled.span`
  width: 10.6rem;
  height: 1.2rem;
  ${({ theme }) => theme.fonts.detail1_middle};
  border-color: ${({ theme }) => theme.colors.white};
`;
