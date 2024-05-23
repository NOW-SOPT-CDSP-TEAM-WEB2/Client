import { client } from '../../../utils/client';

export interface roomResponseType {
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

export interface wishListApiDataType {
  latitude: number;
  longitude: number;
  roomResponse: roomResponseType;
}

export interface wishListResponseType {
  data: wishListApiDataType[];
}

export const getWishList = () => {
  return client.get(`/api/v1/wishes`);
};
