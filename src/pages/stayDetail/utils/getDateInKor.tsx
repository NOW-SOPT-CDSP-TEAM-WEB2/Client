const formatDateWithDots = (date: Date) => {
  if (!date) return '';
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2);
  const day = String(date.getDate()).padStart(2);
  return `${year}년 ${month}월 ${day}일`;
};

export default formatDateWithDots;
