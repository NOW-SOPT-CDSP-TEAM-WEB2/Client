import { Dispatch, SetStateAction } from 'react';
import styled from 'styled-components';

import { client } from '../../../utils/client';
import { RoomDataType } from '../types/HomePageItemType';

interface CarouselWrapperListProps {
  roomData: RoomDataType[];
  setRoomData: Dispatch<SetStateAction<RoomDataType[]>>;
}

const CarouselWrapperList = (props: CarouselWrapperListProps) => {
  const { roomData, setRoomData } = props;

  const getRoomData = async () => {
    try {
      const response = await client.get<RoomDataType[]>(`/api/v1/rooms`);
      setRoomData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const postWish = async (roomId: number) => {
    const data = await client.post(`/api/v1/wishes/${roomId}`);
    console.log(data.data);
  };

  const getWish = async () => {
    const wishList = await client.get(`/api/v1/wishes`);
    console.log(wishList.data);
  };

  const deleteWish = async (roomId: number) => {
    const data = await client.delete(`/api/v1/wishes/${roomId}`);
    console.log(data.data);
  };

  const handleCardClick = (props: RoomDataType) => {
    const room = props;
    room.isWishList ? deleteWish(room.roomId) : postWish(room.roomId);
    getRoomData();
    getWish();
  };

  return (
    <CardWrapper>
      {roomData.map((room) => (
        <Card key={room.roomId} onClick={() => handleCardClick(room)} />
      ))}
    </CardWrapper>
  );
};

export default CarouselWrapperList;

const CardWrapper = styled.ul`
  display: grid;
  /* stylelint-disable-next-line unit-allowed-list */
  grid-template-columns: repeat(5, 1fr);
  width: 124.9rem;
  margin-top: 1.6rem;

  column-gap: 1.6rem;
  row-gap: 3rem;
`;
const Card = styled.div`
  width: 23.7rem;
  height: 31.2rem;

  background-color: ${({ theme }) => theme.colors.black};
`;
