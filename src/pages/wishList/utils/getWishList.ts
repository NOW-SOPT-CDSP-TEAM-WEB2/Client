import { client } from '../../../utils/client';

export interface wishListApiData {
  roomId: number;
  roomImageList: string[];
  roomLocation: string;
  roomRating: number;
  currentDistance: string;
  recommendedDates: string;
  guestReview: string;
  roomPrice: number;
  isSuperHost: boolean;
  isWishList: boolean;
}

export const getWishList = () => {
  return client.get<wishListApiData[]>(`/api/v1/rooms`);
};
