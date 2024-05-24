import 'react-calendar/dist/Calendar.css';

import Calendar from 'react-calendar';
import styled from 'styled-components';

interface OutputCalendarProps {
  startDate: Date;
  endDate: Date;
  type: string;
  activeStartDate?: Date;
}

const OutputCalendar = (props: OutputCalendarProps) => {
  const { startDate, endDate, type, activeStartDate } = props;

  return (
    <div>
      <StyleCalendar
        selected={(startDate, endDate)}
        calendarType="gregory"
        view="month"
        selectRange={true}
        activeStartDate={activeStartDate}
        prev2Label={null}
        next2Label={null}
        showNeighboringMonth={false}
        formatDay={(_locale, date) => date.toLocaleString('en', { day: 'numeric' })}
        tileClassName={({ date, view }) => {
          if (view === 'month') {
            if (
              (startDate && date.toDateString() === startDate.toDateString()) ||
              (endDate && date.toDateString() === endDate.toDateString())
            ) {
              return 'react-calendar__tile--active';
            }
          }
          return null;
        }}
        tileDisabled={() => false}
      />
    </div>
  );
};

export default OutputCalendar;

export const StyleCalendar = styled(Calendar)`
  width: 23.9rem;
  border: none;
  .react-calendar {
    width: 23.9rem;
  }

  //상단 년월 고르는 네비게이션
  .react-calendar__navigation {
    display: flex;
    height: 3.8rem;
    padding: 1rem 0;
    margin: 0;
  }
  .react-calendar__navigation__label__labelText {
    ${({ theme }) => theme.fonts.body02_heavy};
    color: ${({ theme }) => theme.colors.black};
  }

  //요일 텍스트 스타일
  .react-calendar__month-view__weekdays {
    padding: 1rem 0;
    text-align: center;
    ${({ theme }) => theme.fonts.detail1_middle};
    color: ${({ theme }) => theme.colors.gray800};
    text-decoration: none;
    text-decoration-line: none;
  }
  .react-calendar__month-view__weekdays__weekday {
    text-decoration: none;
    text-decoration-line: none;
    padding: 0;
  }

  .react-calendar__month-view__weekdays__weekday__aria-label {
    text-decoration: none;
    text-decoration-line: none;
  }
  .react-calendar__month-view__weekdays__weekday {
    text-decoration: none;
    text-decoration-line: none !important;
  }
  .react-calendar__month-view__weekdays__weekday--weekend {
    text-decoration: none;
    text-decoration-line: none;
  }

  //평일 날짜 텍스트 스타일
  .react-calendar__month-view__days {
    ${({ theme }) => theme.fonts.detail1_middle};
    color: ${({ theme }) => theme.colors.black};
    width: 23.9rem;
    margin: 0;
  }
  .react-calendar__month-view__days__day {
    padding: 0;
    width: 3.4rem;
    height: 3.4rem;
  }
  //주말 날짜 텍스트 스타일
  .react-calendar__month-view__days__day--weekend {
    color: ${({ theme }) => theme.colors.black};
  }

  .react-calendar__tile--hasActive {
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.pink200};
  }

  //날짜 호버 스타일
  .react-calendar__tile:hover {
    background-color: ${({ theme }) => theme.colors.gray400};
    border-radius: 100%;
  }

  //날짜 선택 시 동그라미 스타일
  .react-calendar__tile--active {
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.black};
    border-radius: 100%;
  }

  //오늘 날짜 스타일
  .react-calendar__tile--now {
    background-color: transparent;
    color: ${({ theme }) => theme.colors.black};
  }
  .react-calendar__tile--now:hover {
    color: ${({ theme }) => theme.colors.black};
    background-color: ${({ theme }) => theme.colors.gray400};
    border-radius: 100%;
  }
  .react-calendar__tile--now:active {
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.black};
    border-radius: 100%;
  }
  .react-calendar__tile--active:enabled:hover,
  .react-calendar__tile--active:enabled:focus {
    background-color: ${({ theme }) => theme.colors.black};
  }
`;
