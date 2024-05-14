import styled from 'styled-components';

const HomeHeaderContent = () => {
  return (
    <HomeHeaderContentWrapper>
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
