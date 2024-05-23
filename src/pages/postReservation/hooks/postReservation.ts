import { client } from './../../../utils/client';

interface PostReseveInfoProps {
  checkInDate: string;
  checkOutDate: string;
  headCount: number;
  messageToHost: string;
}

interface responseType {
  status: number;
  message: string;
}

export const postReserveInfo = (body: PostReseveInfoProps, roomId: number) => {
  return client.post<responseType>(`api/v1/rooms/${roomId}`, body);
};
