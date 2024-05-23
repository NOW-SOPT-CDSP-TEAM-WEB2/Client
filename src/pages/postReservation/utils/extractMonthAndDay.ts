export function extractMonthAndDay(dateStr: string) {
  const dateParts: [string, string, string] = dateStr.split('-') as [string, string, string];

  const month: string = dateParts[1];
  const day: string = dateParts[2];

  return { month, day };
}
