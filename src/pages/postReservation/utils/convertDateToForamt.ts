export const convertToYYYYMMDD = (dateString: string) => {
  const date = new Date(dateString);

  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const day = date.getDate().toString().padStart(2, '0');

  // Format the date as YYYY-MM-DD
  return `${year}-${month}-${day}`;
};
