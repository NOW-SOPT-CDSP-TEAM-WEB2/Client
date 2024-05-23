import { Dispatch, SetStateAction } from 'react';
import styled from 'styled-components';

import CarouselWrapperComponent from '../../../components/commons/carousel/CarouselWrapperComponent';
import { RoomDataType } from '../types/HomePageItemType';

interface CarouselWrapperListProps {
  roomData: RoomDataType[];
  setRoomData: Dispatch<SetStateAction<RoomDataType[]>>;
}

const CarouselWrapperList = (props: CarouselWrapperListProps) => {
  const { roomData, setRoomData } = props;

  return (
    <CardWrapper>
      {roomData.map((room) => (
        <CarouselWrapperComponent key={room.roomId} room={room} setRoomData={setRoomData} />
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
