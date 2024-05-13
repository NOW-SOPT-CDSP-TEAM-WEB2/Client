import styled from 'styled-components';

const NavHeaderContent = () => {
  return (
    <NavHeaderWrapper>
      <Content>어디든지</Content>
      <Bar />
      <Content>언제든 일주일</Content>
      <Bar />
      <Content>게스트 추가</Content>
    </NavHeaderWrapper>
  );
};

export default NavHeaderContent;

const NavHeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 25.2rem;
  padding: 0.4rem 1rem;

  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 0 0.2rem 0.6rem 0 ${({ theme }) => theme.colors.boxDrop};
  border: 1px solid ${({ theme }) => theme.colors.gray400};
  border-radius: 99px;
`;

const Content = styled.div`
  padding: 1rem;

  color: ${({ theme }) => theme.colors.black};
  ${({ theme }) => theme.fonts.body03_heavy};
  cursor: pointer;

  &:nth-child(3) {
    color: ${({ theme }) => theme.colors.gray800};
    ${({ theme }) => theme.fonts.body03_middle};
  }
`;

const Bar = styled.div`
  width: 0.1rem;
  height: 1.6rem;

  background-color: ${({ theme }) => theme.colors.gray400};
`;
