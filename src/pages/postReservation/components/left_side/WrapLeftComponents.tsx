import React, { useState } from 'react';
import styled from 'styled-components';

import { PostContent } from '../../constatnts/postResevationText.ts';
import CardNotice from './CardNotice';
import PaymentWay from './PaymentWay';
import PostButton from './PostButton';
import RefundPolicy from './RefundPolicy';
import ReserveInfo from './ReserveInfo';
import SelectPayment from './SelectPayment';
import SendingMessage from './SendingMessage';
import { API_Test } from '../../constatnts/apiTestText.ts';

interface WrapLeftComponentsProps {
  checkInDate: string;
  checkOutDate: string;
  daysDifference: number;
  paymentDate: string;
}

const WrapComponents = (props: WrapLeftComponentsProps) => {
  const { checkInDate, checkOutDate, daysDifference, paymentDate } = props;
  const [hostMessage, setHostMessage] = useState<string>('');

  const handleHostMessageChange = (value: string) => {
    setHostMessage(value);
  };

  return (
    <>
      <ComponentsWrapper>
        <CardNotice hostName={API_Test.hostName} />
        <ReserveInfo checkInDate={checkInDate} checkOutDate={checkOutDate} />
        <SelectPayment price={API_Test.roomPrice} daysDifference={daysDifference} paymentDate={paymentDate} />
        <PaymentWay />
        <SendingMessage
          hostName={API_Test.hostName}
          handleChange={handleHostMessageChange}
          yearsOfHosting={API_Test.yearsOfHosting}
          messageToHost={hostMessage}
        />
        <RefundPolicy checkInDate={checkInDate} />
        <PostButton buttonText={PostContent.title} />
      </ComponentsWrapper>
    </>
  );
};

export default WrapComponents;

const ComponentsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  padding-right: 7.1rem;
  padding-left: 3.3rem;
`;
