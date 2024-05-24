import styled from 'styled-components';

import { LeafLeftUnderIcon, LeafRightUnderIcon, RateListIcon, ReviewListIcon } from '../../../assets/svgs';

const Review = () => {
  return (
    <ReviewWrapper>
      <StarWrapper>
        <Star>
          <LeafLeftUnderIcon />
          <StarRate>4.95</StarRate>
          <LeafRightUnderIcon />
        </Star>
        <StarDetail>
          <StarDetailTextTop>게스트 선호</StarDetailTextTop>
          <StarDetailTextBottom>
            평점, 후기, 신뢰도 기준 <br />
            에어비앤비에서 가장 사랑받는 숙소
          </StarDetailTextBottom>
        </StarDetail>
        <RateListIcon />
      </StarWrapper>
      <ReviewContainer>
        <ReviewListIcon />
        <MoreReviewBtn>후기 84개 모두 보기</MoreReviewBtn>
      </ReviewContainer>
    </ReviewWrapper>
  );
};

export default Review;

const ReviewWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const StarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 5rem 0 3rem 0;

  border-bottom: 1px solid ${({ theme }) => theme.colors.gray400};
`;

const Star = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
`;
const StarRate = styled.span`
  color: ${({ theme }) => theme.colors.black};
  ${({ theme }) => theme.fonts.heading00};
`;
const StarDetail = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 6rem;
`;
const StarDetailTextTop = styled.span`
  margin-bottom: 1.3rem;

  ${({ theme }) => theme.fonts.heading04};
  color: ${({ theme }) => theme.colors.black};
`;
const StarDetailTextBottom = styled.span`
  color: ${({ theme }) => theme.colors.gray800};
  white-space: pre-wrap;
  text-align: center;
  ${({ theme }) => theme.fonts.title02_middle};
`;

const ReviewContainer = styled.div`
  width: 100%;
  margin-top: 3.2rem;

  border-bottom: 1px solid ${({ theme }) => theme.colors.gray400};
`;
const MoreReviewBtn = styled.button`
  margin-bottom: 4rem;
  padding: 1rem 1.6rem;

  color: ${({ theme }) => theme.colors.black};

  background-color: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.gray400};
  border-radius: 6px;
  ${({ theme }) => theme.fonts.body02_middle};
`;
