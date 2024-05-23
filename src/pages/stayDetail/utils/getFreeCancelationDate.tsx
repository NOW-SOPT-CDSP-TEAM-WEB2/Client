const freeCancelationDate = (date: Date) => {
  if (!date) return '';
  const newDate = new Date(date);

  newDate.setDate(newDate.getDate() - 1);
  const month = String(newDate.getMonth() + 1).padStart(2);
  const day = String(newDate.getDate()).padStart(2);
  return `${month}월 ${day}일`;
};

export default freeCancelationDate;
