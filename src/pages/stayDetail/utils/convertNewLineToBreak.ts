export const convertNewlinesToBreaks = (roomDetail: string) => {
  return roomDetail.replace(/\\n/g, '');
};
