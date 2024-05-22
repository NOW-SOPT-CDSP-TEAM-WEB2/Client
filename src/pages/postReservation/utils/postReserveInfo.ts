import { client } from './../../../utils/client';

export const postReserveInfo = (inputVal) => {
  return client.post(`/api/v1/rooms/{roomId}`, inputVal);
};
