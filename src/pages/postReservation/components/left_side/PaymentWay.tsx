import React from 'react';
import styled from 'styled-components';

import {
  AmexIcon,
  ArrowDownIcon,
  MasterCardIcon,
  MasterCardNormalIcon,
  NaverPayIcon,
  VisaIcon,
} from '../../../../assets/svgs';
import { PaymentContent } from '../../constatnts/postResevationText.ts';

const PaymentWay = () => {
  return (
    <>
      <PaymentWayWrapper>
        <TitleArea>
          <PaymentWayTitle>{PaymentContent.title}</PaymentWayTitle>
          <IconWrapper>
            <VisaIcon />
            <AmexIcon />
            <MasterCardIcon />
            <NaverPayIcon />
          </IconWrapper>
        </TitleArea>

        <PaymentCardArea>
          <CurrentCardInfo>
            <CardInfoIconWrapper>
              <MasterCardNormalIcon />
            </CardInfoIconWrapper>
            <PaymentCardInfo> {PaymentContent.content}</PaymentCardInfo>
          </CurrentCardInfo>
          <ArrowIconWrapper>
            <ArrowDownIcon />
          </ArrowIconWrapper>
        </PaymentCardArea>
      </PaymentWayWrapper>
    </>
  );
};

export default PaymentWay;

const PaymentWayWrapper = styled.div`
  width: 42.7rem;
  padding-top: 4rem;
  padding-bottom: 2.2rem;

  border-bottom: 1px solid ${({ theme }) => theme.colors.gray400};
`;

const TitleArea = styled.div`
  display: flex;
  justify-content: space-between;
  width: 42.7rem;
  height: 4.4rem;
`;

const PaymentWayTitle = styled.p`
  ${({ theme }) => theme.fonts.heading04};
`;

const IconWrapper = styled.div`
  display: flex;
`;

const PaymentCardArea = styled.div`
  display: flex;
  justify-content: space-between;

  border: 1px solid ${({ theme }) => theme.colors.gray600};
  border-radius: 6px;
`;

const CardInfoIconWrapper = styled.div`
  padding: 1.2rem 0.3rem 1.3rem 1.2rem;
`;
const CurrentCardInfo = styled.div`
  display: flex;
`;
const PaymentCardInfo = styled.p`
  padding: 1.9rem 0 1.8rem 0;
  ${({ theme }) => theme.fonts.body01_light};
`;

const ArrowIconWrapper = styled.div`
  padding: 2rem 1rem 1.4rem;
`;
