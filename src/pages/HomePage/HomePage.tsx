/* eslint-disable simple-import-sort/imports */
import { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';

import CarouselWrapperList from './components/CarouselWrapperList';
import Chips from './components/Chips';
import HomeCategorySearch from './components/HomeCategorySearch';
import HomeFooter from './components/HomeFooter';
import LnbList from './components/LnbList';
import SearchTravel from './components/SearchTravel';
import useScrollY from './hooks/useScrollY';
import { RoomDataType } from './types/HomePageItemType';
import Footer from '../../components/commons/footer/Footer';
import { HomeDefaultHeader } from '../../components/commons/Header';
import { client } from '../../utils/client';

interface Scroll {
  isScroll: boolean;
}

const HomePage = () => {
  const { isScroll }: Scroll = useScrollY();
  const [roomData, setRoomData] = useState<RoomDataType[]>([]);
  const getRoomData = async () => {
    try {
      const response = await client.get<RoomDataType[]>(`/api/v1/rooms`);
      setRoomData(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getRoomData();
  }, []);
  console.log(roomData);
  return (
    <HomeWrapper>
      <HomeDefaultHeader isScroll={isScroll} />
      <SearchTravel isScroll={isScroll} />
      <LnbChipWrapper $isScroll={isScroll}>
        <LnbList />
        <Chips />
      </LnbChipWrapper>
      <CarouselWrapperList roomData={roomData} setRoomData={setRoomData} />
      <HomeCategorySearch />
      <HomeFooter />
      <Footer />
    </HomeWrapper>
  );
};

export default HomePage;

const HomeWrapper = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 1366px;
`;
const LnbChipWrapper = styled.div<{ $isScroll: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 1366px;
  height: 14rem;

  ${(props) =>
    props.$isScroll
      ? css`
          position: fixed;
          top: 6rem;

          background-color: ${({ theme }) => theme.colors.white};
        `
      : css`
          margin-top: 1.3rem;
        `}
  border-radius: 10px;
`;
