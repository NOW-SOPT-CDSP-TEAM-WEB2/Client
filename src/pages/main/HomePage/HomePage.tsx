import styled, { css } from 'styled-components';

import { HomeDefaultHeader } from '../../../components/commons/Header';
import useScrollY from '../../hooks/useScrollY';
import CarouselWrapperList from './components/CarouselWrapperList';
import Chips from './components/Chips';
import HomeCategorySearch from './components/HomeCategorySearch';
import HomeFooter from './components/HomeFooter';
import LnbList from './components/LnbList';
import SearchTravel from './components/SearchTravel';

interface Scroll {
  isScroll: boolean;
}

const HomePage = () => {
  const { isScroll }: Scroll = useScrollY();

  return (
    <HomeWrapper>
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
