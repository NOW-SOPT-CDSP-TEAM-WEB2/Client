import styled from 'styled-components';

import { CarouselLeftIcon, CarouselrightIcon } from '../../../assets/svgs';
import { FooterCarouselItemInfo, FooterCaureselTitle } from '../constants';

const HomeFooter = () => {
  return (
    <HomeFooterWrapper>
      <FooterTitle>다음 여행을 위한 추천 여행지</FooterTitle>
      <FooterCarouselTitleList>
        {FooterCaureselTitle.map((info) => {
          return <FooterCarouselTitleItem key={info.id}>{info.text}</FooterCarouselTitleItem>;
        })}
      </FooterCarouselTitleList>
      <FooterCarousel>
        <CarouselLeftBtn />
        {FooterCarouselItemInfo.map((info) => (
          <FooterCarouselItem key={info.id}>
            <FooterCarouselImg src={info.img} />
            <FooterCarouselInfo>
              <FooterCarouselTitle>{info.title}</FooterCarouselTitle>
              <FooterCarouselRecommend>{info.recommend}</FooterCarouselRecommend>
              <FooterCarouselDescription>{info.description}</FooterCarouselDescription>
              <FooterCarouselPriceWrapper>
                <FooterCarouselDefaultPrice>{info.defaultPrice}</FooterCarouselDefaultPrice>
                <FooterCarouselDiscountPrice>{info.discountPrice}</FooterCarouselDiscountPrice>
                <FooterCarouselDay>{info.day}</FooterCarouselDay>
              </FooterCarouselPriceWrapper>
            </FooterCarouselInfo>
          </FooterCarouselItem>
        ))}
        <CarouselRightBtn />
      </FooterCarousel>
    </HomeFooterWrapper>
  );
};

export default HomeFooter;

const HomeFooterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 1366px;
  padding: 1.3rem 0 0 25.5rem;

  background-color: ${({ theme }) => theme.colors.gray100};
  border: solid 1px ${({ theme }) => theme.colors.gray400};
`;

const FooterTitle = styled.h3`
  ${({ theme }) => theme.fonts.heading04};
  margin-bottom: 2.3rem;
`;

const FooterCarouselTitleList = styled.ul`
  display: flex;
  gap: 1.9rem;

  color: ${({ theme }) => theme.colors.gray800};
`;

const FooterCarouselTitleItem = styled.li`
  ${({ theme }) => theme.fonts.body03_heavy};
  height: 2.1rem;

  &:first-of-type {
    border-bottom: solid 2px ${({ theme }) => theme.colors.black};
  }
`;

const FooterCarousel = styled.ul`
  position: relative;
  display: flex;
  gap: 7rem;
  width: 81rem;
  padding: 1.2rem 0 1.9rem 0;

  border-top: solid 1px ${({ theme }) => theme.colors.gray400};
`;

const FooterCarouselItem = styled.li`
  display: flex;
  gap: 0.8rem;
`;

const FooterCarouselImg = styled.img`
  cursor: default;
`;

const FooterCarouselInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 0.65rem;
`;

const FooterCarouselTitle = styled.h6`
  padding: 0.3rem 0.8rem;

  border: solid 1px ${({ theme }) => theme.colors.gray400};
  border-radius: 16px;
  ${({ theme }) => theme.fonts.body03_middle};
`;

const FooterCarouselRecommend = styled.p`
  ${({ theme }) => theme.fonts.body03_middle};
  margin: 0.7rem 0;

  color: ${({ theme }) => theme.colors.gray800};
`;

const FooterCarouselDescription = styled.p`
  ${({ theme }) => theme.fonts.body03_heavy};
  margin-bottom: 3rem;

  color: ${({ theme }) => theme.colors.black};
  white-space: pre-wrap;
`;

const FooterCarouselPriceWrapper = styled.div`
  display: flex;
  gap: 0.1rem;
`;

const FooterCarouselDefaultPrice = styled.span`
  color: ${({ theme }) => theme.colors.gray800};
  ${({ theme }) => theme.fonts.body02_middle};
  text-decoration: line-through;
`;

const FooterCarouselDiscountPrice = styled.span`
  color: ${({ theme }) => theme.colors.black};
  ${({ theme }) => theme.fonts.body02_middle};
`;

const FooterCarouselDay = styled.span`
  color: ${({ theme }) => theme.colors.gray800};
  ${({ theme }) => theme.fonts.body02_middle};
`;

const CarouselLeftBtn = styled(CarouselLeftIcon)`
  position: absolute;
  bottom: 6.5rem;
  left: -2%;
`;

const CarouselRightBtn = styled(CarouselrightIcon)`
  position: absolute;
  right: 1.233rem;
  bottom: 6.5rem;
`;
