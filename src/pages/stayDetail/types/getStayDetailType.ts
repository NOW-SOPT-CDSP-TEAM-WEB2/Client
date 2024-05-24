export interface roomDetailType {
  roomId: number;
  roomName: string;
  roomInfo: roomInfoType;
  hostName: string;
  yearsOfHosting: number;
  description: string;
}

export interface roomInfoType {
  maxGuests: number;
  bedrooms: number;
  beds: number;
  bathrooms: number;
}

export interface getStayDetailType {
  roomImageList: string[];
  roomLocation: string;
  roomRating: number;
  isSuperHost: boolean;
  roomPrice: number;
  latitude: number;
  longitude: number;
  roomDetail: roomDetailType;
}
