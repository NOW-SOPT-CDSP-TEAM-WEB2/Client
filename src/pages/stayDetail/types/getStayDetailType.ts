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

// roomName: "휴식과 기록 'studio supe'",
// roomLocation: '제주 애월읍 (Korea, Jeju)',
// hostName: '김창균',
// isSuperHost: true,
// yearsOfHosting: 2,
// roomPrice: 150000,
// roomRating: 4.94,
// checkInDate: '2024-05-13',
// checkOutDate: '2024-05-17',

// roomLocation: '제주 애월읍 (Korea, Jeju)',
// roomRating: 4.94,

// startDate: startDate,
// endDate: endDate,
// roomPrice: roomPrice,
// roomDetail: roomDetail,
// isSuperHost: isSuperHost,
