export function getPrice(price, difference): number {
  const detailPrice = price * difference;
  const commissionFee = Math.floor(detailPrice * 0.142);
  const totalPrice = detailPrice + commissionFee;

  const departPrcie = Math.floor(totalPrice * 0.2);
  const otherPrice = totalPrice - departPrcie;

  return { detailPrice, commissionFee, totalPrice, departPrcie, otherPrice };
}
