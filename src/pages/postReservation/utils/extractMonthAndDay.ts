export function extractMonthAndDay(dateStr: string): { month: string; day: string } | string {
  const dateParts: [string, string, string] = dateStr.split('-') as [string, string, string];

  if (dateParts.length !== 3) {
    return 'YYYY-MM-DD 형식의 데이터로 입력해 주세요';
  }

  const month: string = dateParts[1];
  const day: string = dateParts[2];

  return { month, day };
}
