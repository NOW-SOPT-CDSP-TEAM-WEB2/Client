export function getDifferenceDate(dateString1: string, dateString2: string) {
  const date1: Date = new Date(dateString1);
  const date2: Date = new Date(dateString2);

  const diffInMilliseconds: number = Math.abs(date2.getTime() - date1.getTime());

  const millisecondsInOneDay: number = 1000 * 60 * 60 * 24;
  const diffInDays: number = Math.floor(diffInMilliseconds / millisecondsInOneDay);

  return diffInDays;
}
