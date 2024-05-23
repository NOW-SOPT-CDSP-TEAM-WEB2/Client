export function getStayDate(startDate: Date, endDate: Date): number {
  const Date1: Date = new Date(startDate);
  const Date2: Date = new Date(endDate);
  const differenceInSeconds: number = Math.abs(Date2.getTime() - Date1.getTime());

  const differenceInADay: number = 1000 * 60 * 60 * 24;
  const diffInDays: number = Math.floor(differenceInSeconds / differenceInADay);

  return diffInDays;
}
