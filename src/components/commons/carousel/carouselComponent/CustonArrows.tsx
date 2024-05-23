import React from 'react';

import { LeftCircleBtn, RightCircleBtn } from '../../../../assets/svgs';

type ArrowProps = {
  className?: string;
  style?: React.CSSProperties;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
};

export const NextArrow: React.FC<ArrowProps> = ({ className, style, onClick }) => (
  <div
    className={`${className}`}
    style={{
      ...style,
    }}
    onClick={onClick}>
    <RightCircleBtn />
  </div>
);

export const PrevArrow: React.FC<ArrowProps> = ({ className, style, onClick }) => (
  <div
    className={`${className}`}
    style={{
      ...style,
    }}
    onClick={onClick}>
    <LeftCircleBtn />
  </div>
);
