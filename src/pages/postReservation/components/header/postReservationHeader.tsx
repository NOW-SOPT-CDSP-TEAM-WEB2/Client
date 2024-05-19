import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import { ArrowLeftBlackICon } from '../../../../assets/svgs';
import { PostContent } from '../../constatnts/postResevationText.ts';

const postReservationHeader = () => {
  const navigate = useNavigate();

  const onClickBefore = () => {
    navigate(-1);
  };

  return (
    <>
      <PostHeader>
        <ArrowLeftBlackICon onClick={onClickBefore} />
        <PostTxt>{PostContent.title}</PostTxt>
      </PostHeader>
    </>
  );
};

export default postReservationHeader;

const PostHeader = styled.div`
  display: flex;
  gap: 0.9rem;
  align-items: center;
  height: 2.4rem;
  padding: 4.4rem 0 4rem 0;
`;

const PostTxt = styled.p`
  height: 2.4rem;
  padding-left: 0.9rem;
  ${({ theme }) => theme.fonts.heading01};
`;
