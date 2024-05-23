/* eslint-disable import/order */
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import { WishListThumIcon } from '../../assets/svgs';
import Footer from '../../components/commons/footer/Footer';
import { WishHeader } from '../../components/commons/header/Header';
import { getWishList, wishListApiData } from './utils/getWishList';

const WishList = () => {
  const navigate = useNavigate();
  const [wishList, setWishList] = useState<wishListApiData[]>([]);

  const getWishListData = async () => {
    try {
      const res = await getWishList();
      console.log(res.data);
      setWishList(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getWishListData();
  }, []);

  const onClickWishList = () => {
    navigate('/wishListDetail');
  };
  return (
    <>
      <WishHeader />
      <WishListWrapper>
        <Title>위시리스트</Title>
        <WishCardWrapper onClick={onClickWishList}>
          <WishThumListIc />
          <WishDetail>
            <WishCategory>꼭 가보고 싶은 곳</WishCategory>
            <WishNum>{wishList.length}개 저장됨</WishNum>
          </WishDetail>
        </WishCardWrapper>
      </WishListWrapper>
      <Footer />
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
  margin-bottom: 22.5rem;
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
