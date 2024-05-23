export function getDateBeforeDays(inputDate: string): string {
  const date = new Date(inputDate);
  date.setDate(date.getDate() - 10);

  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const day = date.getDate().toString().padStart(2, '0');

  const paymentPeriod = `${year}년 ${month}월 ${day}일`;

  return paymentPeriod;
}
