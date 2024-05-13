import styled from 'styled-components';

import { HamburgerBlackIcon, InternetBlackIcon, ProfileImgIcon } from '../../assets/svgs';

const HeaderProfile = () => {
  return (
    <ProfileWrapper>
      <ProfileText>당신의 공간을 에어비앤비하세요</ProfileText>
      <InternetBlackIconWrapper>
        <InternetBlackIcon />
      </InternetBlackIconWrapper>
      <ProfileDropDownWrapper>
        <HamburgerBlackIcon />
        <ProfileImgIcon />
      </ProfileDropDownWrapper>
    </ProfileWrapper>
  );
};

export default HeaderProfile;

const ProfileWrapper = styled.div`
  display: flex;
  gap: 0.8rem;
  align-items: center;
  justify-content: center;
`;

const ProfileText = styled.span`
  cursor: default;
  ${({ theme }) => theme.fonts.body03_middle}
`;

const InternetBlackIconWrapper = styled.div`
  padding: 0.6rem;

  cursor: pointer;
`;

const ProfileDropDownWrapper = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  justify-content: center;
  width: 6.4rem;
  height: 3.6rem;
  padding: 0.6rem;

  cursor: pointer;
  border: 1px solid ${({ theme }) => theme.colors.gray400};
  border-radius: 99px;
`;
