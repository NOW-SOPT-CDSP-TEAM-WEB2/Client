import axios from 'axios';
import { useState } from 'react';
import styled from 'styled-components';

interface CarouselWrapperListProps {
  roomData: object[];
}
const CarouselWrapperList = (props: CarouselWrapperListProps) => {
  const { roomData } = props;
  const initBoolean = Array(roomData.length + 1).fill(false);

  const [isLiked, setIsLiked] = useState<boolean[]>(initBoolean);

  const postWish = async (roomId: number) => {
    const temp = isLiked.map((elem, index) => (roomId === index ? elem : elem));
    console.log('temp', temp);
    setIsLiked([...temp]);
    const data = await axios.post(`${import.meta.env.VITE_BASE_URL}api/v1/wishes/${roomId}`);
    console.log(data.data);
  };

  const getWish = async () => {
    const wishList = await axios.get(`${import.meta.env.VITE_BASE_URL}api/v1/wishes`);
    console.log(wishList.data);
  };

  const deleteWish = async (roomId: number) => {
    const temp = isLiked.map((elem, index) => (roomId === index ? !elem : elem));
    setIsLiked(temp);
    const data = await axios.delete(`${import.meta.env.VITE_BASE_URL}api/v1/wishes/${roomId}`);
    console.log(data.data);
  };

  const handleCardClick = (roomId: number) => {
    isLiked[roomId] ? deleteWish(roomId) : postWish(roomId);
    getWish();
    console.log(isLiked);
  };

  return (
    <CardWrapper>
      {roomData.map((room) => (
        <Card key={room.roomId} onClick={() => handleCardClick(room.roomId)} />
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
