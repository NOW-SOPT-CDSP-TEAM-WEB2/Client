export function getRefundDate(inputDate: string): string {
  const month = inputDate.split('월 ')[0];
  const parsedMonth = parseInt(month);
  const day = inputDate.split(' ')[1];
  const parsedDay = parseInt(day);

  const date = new Date();
  date.setMonth(parsedMonth - 1); // 월은 0부터 시작하므로 1을 빼줍니다.
  date.setDate(parsedDay - 1); // 하루 전 날짜로 설정합니다.

  const monthString = (date.getMonth() + 1).toString().padStart(2, '0');
  const dayString = date.getDate().toString().padStart(2, '0');

  return `${monthString}월 ${dayString}일`;
}
