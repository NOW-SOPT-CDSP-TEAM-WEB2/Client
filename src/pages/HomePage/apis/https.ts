import { client } from '../../../utils/client';

export const getRoomData = async () => {
  try {
    const response = await client.get(`/api/v1/rooms`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const postWishList = async (roomId: number) => {
  try {
    await client.post(`/api/v1/wishes/${roomId}`);
  } catch (error) {
    console.log(error);
  }
};

export const deleteWishList = async (roomId: number) => {
  try {
    await client.delete(`/api/v1/wishes/${roomId}`);
  } catch (error) {
    console.log(error);
  }
};
