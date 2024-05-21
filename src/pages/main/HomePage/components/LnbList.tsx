import { useState } from 'react';
import styled, { css } from 'styled-components';

import { LnbInfo } from '../constants';

const LnbList = () => {
  const [isHoverIcon, setIsHoverIcon] = useState<boolean[]>([false, false, false, false, false, false, false, false]);
  const [isClickIcon, setIsClickIcon] = useState<boolean[]>([false, false, false, false, false, false, false, false]);

  const handleIconClick = (id: number, identifier: string) => {
    if (identifier === 'click') {
      const temp = isClickIcon.map((_, index) => (index === id ? true : false));
      setIsClickIcon(temp);
    } else if (identifier === 'mouseOver') {
      const temp = isHoverIcon.map((_, index) => (index === id || isClickIcon[index] ? true : false));
      setIsHoverIcon(temp);
    } else {
      const temp = isHoverIcon.map(() => false);
      setIsHoverIcon(temp);
    }
  };

  return (
    <LnbListWrapper>
      {LnbInfo.map((info) => {
        const BlackIcon = info.svgBlack;
        const GrayIcon = info.svgGray;
        return (
          <LnbItem
            key={info.id}
            onClick={() => handleIconClick(info.id, 'click')}
            $isClicked={isClickIcon[info.id]}
            onMouseOver={() => handleIconClick(info.id, 'mouseOver')}
            onMouseOut={() => handleIconClick(info.id, 'mouseOut')}>
            {isHoverIcon[info.id] || isClickIcon[info.id] ? <BlackIcon /> : <GrayIcon />}
            <LnbText>{info.text}</LnbText>
          </LnbItem>
        );
      })}
    </LnbListWrapper>
  );
};

export default LnbList;

const LnbListWrapper = styled.ul`
  display: flex;
  gap: 3.6rem;
  margin: 2.5rem 0 1.2rem 0;
`;

const LnbItem = styled.li<{ $isClicked: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 1.3rem;

  color: ${({ theme }) => theme.colors.gray800};

  cursor: pointer;
  ${(props) =>
    props.$isClicked &&
    css`
      padding-bottom: 1.2rem;

      color: ${({ theme }) => theme.colors.black};

      border-bottom: solid 1px ${({ theme }) => theme.colors.black};
    `};

  &:nth-of-type(3) {
    width: 1.9rem;
  }

  &:hover {
    padding-bottom: 1.2rem;

    color: ${({ theme }) => theme.colors.black};

    border-bottom: solid 1px ${({ theme }) => theme.colors.gray600};
  }
`;

const LnbText = styled.p`
  ${({ theme }) => theme.fonts.detail1_heavy}
`;
