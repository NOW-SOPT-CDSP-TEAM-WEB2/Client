import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import { ArrowLeftBlackIcon, MeatballBlackIcon, ShareBlackIcon } from '../../assets/svgs';
import Footer from '../../components/commons/footer/Footer';
import { WishHeader } from '../../components/commons/Header';

const WishListDetail = () => {
  const navigate = useNavigate();

  const onClickBack = () => {
    navigate('/wishList');
  };
  return (
    <>
      <WishHeader />
      <WishNav>
        <ArrowLeftBlackIc onClick={onClickBack} />
        <ShareBlackIc />
        <MeatBallBlackIc />
      </WishNav>
      <WishListDetailWrapper>
        <WishListTitle>꼭 가보고 싶은 곳</WishListTitle>
        <NavButtonWrapper>
          <NavButton>날짜 입력하기</NavButton>
          <NavButton>게스트 1명</NavButton>
        </NavButtonWrapper>
        <CarouselTest />
        <WishMapContainer>
          <WishLocTitle>위시 위치</WishLocTitle>
        </WishMapContainer>
      </WishListDetailWrapper>
      <Footer />
    </>
  );
};

export default WishListDetail;

const WishNav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 6rem;
  padding: 1.4rem 9.2rem 1.6rem 9.2rem;
`;

const ArrowLeftBlackIc = styled(ArrowLeftBlackIcon)`
  margin-right: 109.1rem;

  cursor: pointer;
`;

const ShareBlackIc = styled(ShareBlackIcon)`
  margin-right: 1.8rem;

  cursor: pointer;
`;

const MeatBallBlackIc = styled(MeatballBlackIcon)`
  cursor: pointer;
`;

const WishListDetailWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 1366px;
  padding: 0 10rem;
`;

const WishListTitle = styled.h2`
  margin-bottom: 2.6rem;

  color: ${({ theme }) => theme.colors.black};
  ${({ theme }) => theme.fonts.heading01};
`;

const NavButtonWrapper = styled.div`
  display: flex;
  gap: 0.7rem;
  align-items: center;
  justify-content: center;
  margin-bottom: 2.9rem;
`;

const NavButton = styled.button`
  padding: 0.7rem 0.9rem;

  color: ${({ theme }) => theme.colors.black};

  background-color: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.gray400};
  border-radius: 16px;

  ${({ theme }) => theme.fonts.body03_middle};
`;

const CarouselTest = styled.div`
  width: 100%;
  height: 34.8rem;
  margin-bottom: 6.4rem;

  background-color: ${({ theme }) => theme.colors.blue400};
`;

const WishMapContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  margin-bottom: 5rem;
`;

const WishLocTitle = styled.h2`
  ${({ theme }) => theme.fonts.heading03};
  color: ${({ theme }) => theme.colors.black};
`;
