import React from 'react';
import styled from 'styled-components';

import { LeftCircleBtn, RightCircleBtn } from '../../../../assets/svgs';

type ArrowProps = {
  className?: string;
  style?: React.CSSProperties;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
};

export const NextArrow: React.FC<ArrowProps> = ({ className, style, onClick }) => (
  <Arrow
    className={`${className}`}
    style={{
      ...style,
    }}
    onClick={onClick}>
    <RightCircleBtn />
  </Arrow>
);

export const PrevArrow: React.FC<ArrowProps> = ({ className, style, onClick }) => (
  <Arrow
    className={`${className}`}
    style={{
      ...style,
    }}
    onClick={onClick}>
    <LeftCircleBtn />
  </Arrow>
);

const Arrow = styled.div`
  cursor: default;
`;
