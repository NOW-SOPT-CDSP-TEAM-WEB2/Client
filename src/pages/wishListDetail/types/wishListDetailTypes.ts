export interface WishListDetailApiData {
  roomId: number;
  roomImage: string;
  roomLocation: string;
  roomRating: number;
  currentDistance: string;
  recommendedDates: string;
  guestReview: string;
  roomPrice: string;
  isSuperHost: boolean;
  isWishList: boolean;
  latitude: number;
  longitude: number;
}

export interface WishListDetailObj {
  rooms: WishListDetailApiData[];
}

export interface WishListApiResponse {
  data: WishListDetailObj;
}
