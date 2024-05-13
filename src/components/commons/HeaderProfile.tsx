import { useRef, useState } from 'react';
import styled from 'styled-components';

import { HEADER_DROPDOWN_CONTENT } from '../../assets/constants/headerDropdown';
import { HamburgerBlackIcon, InternetBlackIcon, ProfileImgIcon } from '../../assets/svgs';
import useClickOutside from '../../hooks/useClickOutside';

interface headerProfilePropsType {
  padding: number;
}

const HeaderProfile = (props: headerProfilePropsType) => {
  const { padding } = props;
  const dropDownRef = useRef(null);
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);
  const [clickOutsideActive, setClickOutsideActive] = useState(isDropDownOpen);

  const onClickDropDownToggle = () => {
    setIsDropDownOpen(!isDropDownOpen);
  };

  const handleClickOutside = () => {
    if (isDropDownOpen) {
      setClickOutsideActive(true);
    }
    if (clickOutsideActive) {
      setIsDropDownOpen(false);
      setClickOutsideActive(false);
    }
  };

  useClickOutside(dropDownRef, handleClickOutside);

  return (
    <>
      <ProfileWrapper>
        <ProfileText>당신의 공간을 에어비앤비하세요</ProfileText>
        <InternetBlackIconWrapper>
          <InternetBlackIcon />
        </InternetBlackIconWrapper>
        <ProfileDropDownToggle onClick={onClickDropDownToggle}>
          <HamburgerBlackIcon />
          <ProfileImgIcon />
        </ProfileDropDownToggle>
      </ProfileWrapper>
      <ProfileDropDownWrapper $isDropDownOpen={isDropDownOpen} $right={padding} ref={dropDownRef}>
        {HEADER_DROPDOWN_CONTENT.map((content, idx) => (
          <DropDownText key={idx + content.toString()}>{content.content}</DropDownText>
        ))}
      </ProfileDropDownWrapper>
    </>
  );
};

export default HeaderProfile;

const ProfileWrapper = styled.div`
  position: relative;

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

const ProfileDropDownToggle = styled.div`
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

const ProfileDropDownWrapper = styled.div<{ $isDropDownOpen: boolean; $right: number }>`
  position: absolute;
  top: 6rem;
  right: ${({ $right }) => `${$right}rem`};

  display: ${({ $isDropDownOpen }) => ($isDropDownOpen ? 'flex' : 'none')};
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 17.8rem;
  padding: 0.8rem 0;

  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 0 0.4rem 1rem 0 ${({ theme }) => theme.colors.boxDrop};
  border-radius: 10px;
`;

const DropDownText = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  padding: 1rem 1.2rem;

  color: ${({ theme }) => theme.colors.black};
  ${({ theme }) => theme.fonts.body03_middle};
  cursor: pointer;

  &:nth-child(3),
  &:nth-child(6) {
    margin-bottom: 0.8rem;
  }

  &:nth-child(-n + 3) {
    ${({ theme }) => theme.fonts.body03_heavy};
  }

  &:nth-child(4),
  &:nth-child(7) {
    border-top: 1px solid ${({ theme }) => theme.colors.gray400};
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.gray100};
  }
`;
