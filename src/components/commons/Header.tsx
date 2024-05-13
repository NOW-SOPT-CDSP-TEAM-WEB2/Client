import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import { LogoIcon } from '../../assets/svgs';
// eslint-disable-next-line import/order
import HeaderProfile from './HeaderProfile';

// 로고만 있는 헤더
export const DefaultHeader = () => {
  const navigate = useNavigate();
  return (
    <DefaultHeaderWrapper>
      <LogoIc onClick={() => navigate('/')} />
    </DefaultHeaderWrapper>
  );
};

// 프로필 헤더
export const ProfileHeader = () => {
  const navigate = useNavigate();
  return (
    <ProfilHeaderWrapper>
      <LogoIc onClick={() => navigate('/')} />
      <HeaderProfile />
    </ProfilHeaderWrapper>
  );
};

const DefaultHeaderWrapper = styled.div`
  position: fixed;
  top: 0;
  z-index: 2;

  display: flex;
  justify-content: space-between;
  width: 1366px;
  height: 6rem;
  padding: 1.7rem 0 1.7rem 2rem;

  background-color: ${({ theme }) => theme.colors.white};
`;

const ProfilHeaderWrapper = styled.div`
  position: fixed;
  top: 0;
  z-index: 2;

  display: flex;
  justify-content: space-between;
  width: 1366px;
  height: 6rem;
  padding: 1.7rem 10rem;

  background-color: ${({ theme }) => theme.colors.white};
`;

const LogoIc = styled(LogoIcon)`
  cursor: pointer;
`;
