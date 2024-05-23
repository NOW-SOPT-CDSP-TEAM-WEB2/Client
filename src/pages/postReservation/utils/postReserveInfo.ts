import { client } from './../../../utils/client';

type PostReseveInfoProps = {
  checkInDate: string;
  checkOutDate: string;
  headCount: number;
  messageToHost: string;
  roomId: number;
};

export const postReserveInfo = async (props: PostReseveInfoProps) => {
  const { checkInDate, checkOutDate, headCount, messageToHost, roomId } = props;
  const data = {
    checkInDate,
    checkOutDate,
    headCount,
    messageToHost,
  };

  try {
    const res = await client.post(`api/v1/rooms/${roomId}`, data);
    console.log(res);
    console.log(data);
    return res;
  } catch (err) {
    alert(err.response?.data.message);
    console.log(err);
    console.log(data);
    console.log(roomId);
    console.log(typeof roomId);
  }
};
