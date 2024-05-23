import styled from 'styled-components';

const HomeCategorySearch = () => {
  return (
    <HomeCategorySearchWrapper>
      <HomeCategorySearchDescription>인기 급상승 카테고리 계속 검색하기</HomeCategorySearchDescription>
      <HomeCategorySearchBtn>더 보기</HomeCategorySearchBtn>
    </HomeCategorySearchWrapper>
  );
};

export default HomeCategorySearch;

const HomeCategorySearchWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
  width: 1366px;
  padding: 4.4rem 0;
`;

const HomeCategorySearchDescription = styled.p`
  color: ${({ theme }) => theme.colors.black};
  ${({ theme }) => theme.fonts.title02_heavy};
`;

const HomeCategorySearchBtn = styled.button`
  padding: 1.2rem 1.7rem;

  color: ${({ theme }) => theme.colors.white};

  background-color: ${({ theme }) => theme.colors.black};
  cursor: pointer;
  border-radius: 7px;
`;
