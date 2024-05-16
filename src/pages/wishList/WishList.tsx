import styled from 'styled-components';

import { WishListThumIcon } from '../../assets/svgs';
import { WishHeader } from '../../components/commons/Header';

const WishList = () => {
  return (
    <>
      <WishHeader />
      <WishListWrapper>
        <Title>위시리스트</Title>
        <WishCardWrapper>
          <WishThumListIc />
          <WishDetail>
            <WishCategory>꼭 가보고 싶은 곳</WishCategory>
            <WishNum>4개 저장됨</WishNum>
          </WishDetail>
        </WishCardWrapper>
      </WishListWrapper>
    </>
  );
};

export default WishList;

const WishListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
  align-items: flex-start;
  justify-content: center;
  width: 1366px;
  margin-top: 6rem;
  padding: 4.2rem 10rem;

  border-top: 1px solid ${({ theme }) => theme.colors.gray200};

  @media (width <= 1166px) {
    position: absolute;
    left: 0;
  }
`;

const Title = styled.h1`
  color: ${({ theme }) => theme.colors.black};
  ${({ theme }) => theme.fonts.heading01};
  cursor: default;
`;

const WishCardWrapper = styled.article`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  align-items: flex-start;
  justify-content: center;
`;

const WishDetail = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  align-items: flex-start;
  justify-content: center;
`;

const WishCategory = styled.span`
  color: ${({ theme }) => theme.colors.black};
  ${({ theme }) => theme.fonts.body01_heavy};
  cursor: pointer;
`;

const WishNum = styled.span`
  color: ${({ theme }) => theme.colors.gray800};
  ${({ theme }) => theme.fonts.body03_light};
  cursor: pointer;
`;

const WishThumListIc = styled(WishListThumIcon)`
  box-shadow: 0 0.4rem 0.4rem 0 ${({ theme }) => theme.colors.cardDrop};
  cursor: pointer;
`;
