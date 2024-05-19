import React from 'react';
import styled from 'styled-components';

import { TimePink32 } from '../../../../assets/svgs';
import { RefundPolicyCard, RefundPolicyContent } from '../../constatnts/postResevationText.ts';
import { getRefundDate } from './../../utils/getRefundDate';

type Props = {
  checkInDate: string;
};

const RefundPolicy = (props: Props) => {
  const refundDay = getRefundDate(props.checkInDate);
  return (
    <>
      <RefundPolicyWrapper>
        <RefundPolicyTitle>{RefundPolicyContent.title}</RefundPolicyTitle>
        <RefundPolicyTextArea1>
          <TextBold>
            {props.checkInDate} {RefundPolicyContent.content_bold}
          </TextBold>
          <TextNormal>
            {RefundPolicyContent.content_normal1}
            {refundDay} {RefundPolicyContent.content_normal2}
          </TextNormal>
          <TextUnderline>{RefundPolicyContent.content_underline}</TextUnderline>
        </RefundPolicyTextArea1>
        <RefundPolicyTextArea2>
          <TimePink32 />
          <Area2TextWrapper>
            <TextBold>{RefundPolicyCard.content_bold}</TextBold>
            <TextNormal>{RefundPolicyCard.content_normal}</TextNormal>
          </Area2TextWrapper>
        </RefundPolicyTextArea2>
        <RefundPolicyTextArea3>
          <TextArea3Normal>{RefundPolicyContent.contentDetail_normal1}</TextArea3Normal>
          <TextArea3Underline>{RefundPolicyContent.contentDetail_underline1}</TextArea3Underline>
          <TextArea3Normal>{RefundPolicyContent.contentDetail_normal2}</TextArea3Normal>
          <TextArea3Underline>{RefundPolicyContent.contentDetail_underline2}</TextArea3Underline>
          <TextArea3Normal>{RefundPolicyContent.contentDetail_normal3}</TextArea3Normal>
        </RefundPolicyTextArea3>

        <RefundPolicyTextArea3>
          <TextArea3Normal> 또한, </TextArea3Normal>
          <TextArea3UnderlineBlue>{RefundPolicyContent.contentPolicy_blue1}</TextArea3UnderlineBlue>
          <TextArea3Normal>과 </TextArea3Normal>
          <TextArea3UnderlineBlue>{RefundPolicyContent.contentPolicy_blue2}</TextArea3UnderlineBlue>
          <TextArea3Normal>및 </TextArea3Normal>
          <TextArea3UnderlineBlue>{RefundPolicyContent.contentPolicy_blue3}</TextArea3UnderlineBlue>
          <TextArea3Normal>에도 동의합니다. </TextArea3Normal>
        </RefundPolicyTextArea3>
      </RefundPolicyWrapper>
    </>
  );
};

export default RefundPolicy;

const RefundPolicyWrapper = styled.div`
  padding-top: 4rem;
  padding-bottom: 2.4rem;
`;

const RefundPolicyTitle = styled.p`
  ${({ theme }) => theme.fonts.heading04};
  padding-bottom: 2rem;
`;

const RefundPolicyTextArea1 = styled.div`
  width: 42.7rem;
  padding-bottom: 2.2rem;

  border-bottom: 1px solid ${({ theme }) => theme.colors.gray400};
`;
const TextBold = styled.span`
  ${({ theme }) => theme.fonts.body01_heavy};
`;
const TextNormal = styled.span`
  ${({ theme }) => theme.fonts.body01_light};
`;
const TextUnderline = styled.span`
  ${({ theme }) => theme.fonts.body01_heavy};
  border-bottom: 1px solid ${({ theme }) => theme.colors.black};
`;

const RefundPolicyTextArea2 = styled.div`
  display: flex;
  width: 42.7rem;
  padding-top: 1.6rem;
  padding-bottom: 2.2rem;

  border-bottom: 1px solid ${({ theme }) => theme.colors.gray400};
`;

const Area2TextWrapper = styled.div`
  width: 42.7rem;
  padding-left: 2.2rem;
`;

const RefundPolicyTextArea3 = styled.div`
  width: 42.7rem;
  padding-top: 1.6rem;
`;

const TextArea3Normal = styled.span`
  ${({ theme }) => theme.fonts.detail1_light};
`;

const TextArea3Underline = styled.span`
  ${({ theme }) => theme.fonts.detail1_heavy};
  border-bottom: 1px solid ${({ theme }) => theme.colors.black};
`;

const TextArea3UnderlineBlue = styled.span`
  color: ${({ theme }) => theme.colors.blue400};
  ${({ theme }) => theme.fonts.detail1_heavy};
  border-bottom: 1px solid ${({ theme }) => theme.colors.blue400};
`;
