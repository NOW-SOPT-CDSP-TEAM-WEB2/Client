/* eslint-disable simple-import-sort/imports */
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import HeaderProfile from './HeaderProfile';
import HomeHeaderContent from './HomeHeaderContent';
import NavHeaderContent from './NavHeaderContent';
import { LogoIcon } from '../../assets/svgs';

// 로고만 있는 헤더
export const DefaultHeader = () => {
  const navigate = useNavigate();
  return (
    <HeaderWrapper $paddingTop={1.7} $paddingRight={0} $paddingBottom={1.7} $paddingLeft={2}>
      <LogoIc onClick={() => navigate('/')} />
    </HeaderWrapper>
  );
};

// 위시, 위시상세 헤더
export const WishHeader = () => {
  const navigate = useNavigate();
  return (
    <HeaderWrapper $paddingTop={1.7} $paddingRight={10} $paddingBottom={1.7} $paddingLeft={10}>
      <LogoIc onClick={() => navigate('/')} />
      <HeaderProfile padding={10} />
    </HeaderWrapper>
  );
};

// 홈 헤더 기본 버전
export const HomeDefaultHeader = () => {
  const navigate = useNavigate();
  return (
    <HeaderWrapper $paddingTop={1.2} $paddingRight={6} $paddingBottom={1.2} $paddingLeft={6}>
      <LogoIc onClick={() => navigate('/')} />
      <HomeHeaderContent />
      <HeaderProfile padding={6} />
    </HeaderWrapper>
  );
};

// 홈 헤더 스크롤 버전, 숙소 상세 헤더 (검색창 있는 버전)
export const NavHeader = () => {
  const navigate = useNavigate();
  return (
    <HeaderWrapper $paddingTop={1.2} $paddingRight={25.6} $paddingBottom={1.2} $paddingLeft={25.6}>
      <LogoIc onClick={() => navigate('/')} />
      <NavHeaderContent />
      <HeaderProfile padding={25.6} />
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.div<{
  $paddingTop: number;
  $paddingRight: number;
  $paddingBottom: number;
  $paddingLeft: number;
}>`
  position: fixed;
  top: 0;
  z-index: 2;

  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 1366px;
  height: 6rem;
  padding: ${({ $paddingTop, $paddingRight, $paddingBottom, $paddingLeft }) =>
    `${$paddingTop}rem ${$paddingRight}rem ${$paddingBottom}rem ${$paddingLeft}rem`};

  background-color: ${({ theme }) => theme.colors.white};
`;

const LogoIc = styled(LogoIcon)`
  cursor: pointer;
`;