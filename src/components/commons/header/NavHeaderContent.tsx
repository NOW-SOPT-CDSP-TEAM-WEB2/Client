import styled, { css } from 'styled-components';
interface NavHeaderContentProps {
  isScroll: boolean;
}
const NavHeaderContent = (props: NavHeaderContentProps) => {
  const { isScroll } = props;
  return (
    <NavHeaderWrapper $isScroll={isScroll}>
      <Content>어디든지</Content>
      <Bar />
      <Content>언제든 일주일</Content>
      <Bar />
      <Content>게스트 추가</Content>
    </NavHeaderWrapper>
  );
};

export default NavHeaderContent;

const NavHeaderWrapper = styled.div<{ $isScroll: boolean }>`
  position: absolute;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 25.2rem;
  margin: 0 25.5rem 0 49.9rem;
  padding: 0.4rem 1rem;

  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 0 0.2rem 0.6rem 0 ${({ theme }) => theme.colors.boxDrop};
  border: 1px solid ${({ theme }) => theme.colors.gray400};
  border-radius: 99px;

  /* stylelint-disable-next-line unit-allowed-list */
  transition: all 0.2s;
  ${(props) =>
    props.$isScroll
      ? css`
          scale: 1;
        `
      : css`
          transform: translate(0, 0);
          scale: 0;
        `}
`;

const Content = styled.div`
  padding: 1rem;

  color: ${({ theme }) => theme.colors.black};
  ${({ theme }) => theme.fonts.body03_heavy};
  cursor: pointer;

  &:nth-child(5) {
    color: ${({ theme }) => theme.colors.gray800};
    ${({ theme }) => theme.fonts.body03_middle};
  }
`;

const Bar = styled.div`
  width: 0.1rem;
  height: 1.6rem;

  background-color: ${({ theme }) => theme.colors.gray400};
`;
