import React from 'react';
import styled from 'styled-components';

import { BackArrowIcon } from '../../../assets/svgs';

const postReservationHeader = () => {
  return (
    <>
      <PostHeader>
        <BackArrowIcon />
        <PostTxt>예약 요청</PostTxt>
      </PostHeader>
    </>
  );
};

export default postReservationHeader;

const PostHeader = styled.div`
  display: flex;
  gap: 0.9rem;
  align-items: center;
  width: 1366px;
  height: 2.4rem;
  padding: 4.4rem 10.05rem 4rem 23.9rem;
`;

const PostTxt = styled.p`
  height: 2.4rem;
  padding-left: 0.9rem;
  ${({ theme }) => theme.fonts.heading01};
`;
