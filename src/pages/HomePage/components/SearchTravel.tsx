import styled, { css } from 'styled-components';

import { SearchMiniWhiteIcon } from '../../../assets/svgs';

type SearchTravelProps = {
  isScroll: boolean;
};

const SearchTravel = (props: SearchTravelProps) => {
  const { isScroll } = props;
  return (
    <SearchTravelWrapper $isScroll={isScroll}>
      <SearchWrapper>
        <SearchTitle>여행지</SearchTitle>
        <SearchText>여행지 검색</SearchText>
      </SearchWrapper>
      <Divider />
      <SearchWrapper>
        <SearchTitle>체크인</SearchTitle>
        <SearchText>날짜 추가</SearchText>
      </SearchWrapper>
      <Divider />
      <SearchWrapper>
        <SearchTitle>체크아웃</SearchTitle>
        <SearchText>날짜 추가</SearchText>
      </SearchWrapper>
      <Divider />
      <SearchWrapper>
        <SearchTitle>여행자</SearchTitle>
        <SearchText>게스트 추가</SearchText>
      </SearchWrapper>
      <SearchBtn>
        <SearchMiniWhiteIC />
      </SearchBtn>
    </SearchTravelWrapper>
  );
};

export default SearchTravel;

const SearchTravelWrapper = styled.div<{ $isScroll: boolean }>`
  z-index: 100;
  display: flex;
  align-items: center;
  width: 65.5rem;
  height: 5rem;
  margin-top: 6rem;
  padding: 0 0.7rem 0 2.5rem;

  box-shadow: 0 4px 6px 0 #2a2a2a1a;
  border: solid 1px ${({ theme }) => theme.colors.gray100};
  border-radius: 30px;

  /* stylelint-disable-next-line unit-allowed-list */
  transition: all 0.3s;
  ${(props) =>
    props.$isScroll
      ? css`
          transform: translate(0, -10rem);
          opacity: 0;
          scale: 0;
        `
      : css`
          transform: translate(0, 0);
          opacity: 1;
        `}
`;

const SearchWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 2.2rem;

  &:nth-of-type(1) {
    margin-right: 14rem;
  }

  &:nth-of-type(2) {
    margin-right: 4.9rem;
  }
  &:nth-of-type(3) {
    margin-right: 4.8rem;
  }
  &:nth-of-type(4) {
    margin-right: 10.4rem;
  }
`;

const SearchTitle = styled.h6`
  ${({ theme }) => theme.colors.black};
  ${({ theme }) => theme.fonts.detail1_heavy};
`;

const SearchText = styled.span`
  ${({ theme }) => theme.colors.gray800};
  ${({ theme }) => theme.fonts.body03_light};
`;

const SearchBtn = styled.button`
  width: 3.6rem;
  height: 3.6rem;

  background-color: ${({ theme }) => theme.colors.pink400};
  border-radius: 18px;
`;

const Divider = styled.div`
  height: 2.4rem;
  margin-right: 1.8rem;

  border: solid 1px ${({ theme }) => theme.colors.gray400};
`;

const SearchMiniWhiteIC = styled(SearchMiniWhiteIcon)`
  cursor: pointer;
`;
