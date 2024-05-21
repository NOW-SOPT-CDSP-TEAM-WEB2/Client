import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import styled, { css } from 'styled-components';

import useScrollY from '../../hooks/useScrollY';
import CarouselWrapperList from './components/CarouselWrapperList';
import Chips from './components/Chips';
import HomeCategorySearch from './components/HomeCategorySearch';
import HomeFooter from './components/HomeFooter';
import LnbList from './components/LnbList';
import SearchTravel from './components/SearchTravel';
import { HomeDefaultHeader, NavHeader } from '../../../components/commons/Header';

interface Scroll {
  isScroll: boolean;
}

const HomePage = () => {
  const { isScroll }: Scroll = useScrollY();

  return (
    <HomeWrapper>
      <NavHeader />
      <HomeDefaultHeader isScroll={isScroll} />
      <SearchTravel isScroll={isScroll} />
      <LnbChipWrapper $isScroll={isScroll}>
        <LnbList />
        <Chips />
      </LnbChipWrapper>
      <CarouselWrapperList />
      <HomeCategorySearch />
      <HomeFooter />
    </HomeWrapper>
  );
};

export default HomePage;

const HomeWrapper = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 136.6rem;
`;
const LnbChipWrapper = styled.div<{ $isScroll: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 136.6rem;
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
