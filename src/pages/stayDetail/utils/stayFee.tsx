export function getStayFee(roomPrice: number, getDateDifference: number) {
  const totalPrice = roomPrice * getDateDifference;
  const stayFee = Math.floor(totalPrice * 0.142);

  return { totalPrice, stayFee };
}
