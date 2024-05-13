import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import { LogoIcon } from '../../assets/svgs';

// 로고만 있는 헤더
export const DefaultHeader = () => {
  const navigate = useNavigate();
  return (
    <DefaultHeaderWrapper>
      <LogoIc onClick={() => navigate('/')} />
    </DefaultHeaderWrapper>
  );
};

const DefaultHeaderWrapper = styled.div`
  position: fixed;
  top: 0;
  z-index: 2;

  display: flex;
  justify-content: flex-start;
  width: 1366px;
  height: 6rem;
  padding: 1.7rem 0 1.7rem 2rem;

  background-color: ${({ theme }) => theme.colors.white};
`;

const LogoIc = styled(LogoIcon)`
  cursor: pointer;
`;
