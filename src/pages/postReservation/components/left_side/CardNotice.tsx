import React from 'react';
import styled from 'styled-components';

import { DiamondPinkIcon } from '../../../../assets/svgs';
import { CardNoticeContent } from '../../constatnts/postResevationText.ts';

type Props = {
  hostName: string;
};
const CardNotice = (props: Props) => {
  return (
    <>
      <CardNoticeWrapper>
        <CardTextWrapper>
          <CardNoticeTitle>{CardNoticeContent.content1}</CardNoticeTitle>
          <CardNoticeTxt>
            {props.hostName}
            {CardNoticeContent.content2}
          </CardNoticeTxt>
        </CardTextWrapper>
        <IconWrapper>
          <DiamondPinkIcon />
        </IconWrapper>
      </CardNoticeWrapper>
    </>
  );
};

export default CardNotice;

const CardNoticeWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 42.7rem;
  height: 7.8rem;

  border: 1px solid ${({ theme }) => theme.colors.gray400};
  border-radius: 8px;
`;

const CardTextWrapper = styled.div`
  width: 32.9rem;
  height: 3.6rem;
  padding: 2rem 0 2.2rem 2rem;
`;
const CardNoticeTitle = styled.p`
  ${({ theme }) => theme.fonts.body01_middle};
`;

const CardNoticeTxt = styled.p`
  ${({ theme }) => theme.fonts.body01_light};
`;

const IconWrapper = styled.div`
  padding: 2rem 3.4rem 3.4rem 2rem;
`;
