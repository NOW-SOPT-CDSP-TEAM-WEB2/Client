import React from 'react';
import { styled } from 'styled-components';

const SuperHostCard = () => {
  return (
    <>
      <SuperHostContent>
        <SupterHostTxt>슈퍼 호스트</SupterHostTxt>
      </SuperHostContent>
    </>
  );
};

export default SuperHostCard;

const SuperHostContent = styled.div`
  position: absolute;
  z-index: 1;
  width: 6.7rem;
  height: 2.1rem;
  margin: 1rem 0 0 1.1rem;

  background-color: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.gray100};
  border-radius: 16px;
`;

const SupterHostTxt = styled.p`
  ${({ theme }) => theme.fonts.body03_heavy};
  align-items: center;

  line-height: 2.1rem;
  text-align: center;
`;
