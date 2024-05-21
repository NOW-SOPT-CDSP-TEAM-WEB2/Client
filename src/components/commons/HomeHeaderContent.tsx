import styled, { css } from 'styled-components';

type scroll = {
  isScroll: boolean;
};
const HomeHeaderContent = ({ isScroll }: scroll) => {
  return (
    <HomeHeaderContentWrapper $isScroll={isScroll}>
      <Content>숙소</Content>
      <Content>체험</Content>
      <Content>온라인 체험</Content>
    </HomeHeaderContentWrapper>
  );
};

export default HomeHeaderContent;

const HomeHeaderContentWrapper = styled.div`
  display: flex;
  gap: 0.9rem;
  align-items: center;
  justify-content: center;
  margin: 0 29.5rem 0 45.9rem;

  transition: all 0.3s;
  ${(props) =>
    props.$isScroll
      ? css`
          transform: translate(0, -4.2rem);
          opacity: 0;
        `
      : css`
          transform: translate(0, 0);
          opacity: 1;
        `}
`;

const Content = styled.div`
  padding: 0.8rem;

  color: ${({ theme }) => theme.colors.gray800};
  ${({ theme }) => theme.fonts.body02_middle};
  cursor: pointer;

  &:first-child {
    color: ${({ theme }) => theme.colors.black};
    ${({ theme }) => theme.fonts.body02_heavy};
  }
`;
