/* eslint-disable simple-import-sort/imports */
import { Dispatch, SetStateAction } from 'react';
import styled from 'styled-components';

import { inputValType } from './../../PostReservationPage';
import CardNotice from './CardNotice';
import PaymentWay from './PaymentWay';
import PostButton from './PostButton';
import RefundPolicy from './RefundPolicy';
import ReserveInfo from './ReserveInfo';
import SelectPayment from './SelectPayment';
import SendingMessage from './SendingMessage';
import { PostContent } from '../../constatnts/PostResevationText.ts';
import { postReservationDataType } from '../../types/postReservationDataType.ts';

interface WrapLeftComponentsProps {
  checkInDate: string;
  checkOutDate: string;
  daysDifference: number;
  paymentDate: string;
  inputVal: inputValType;
  setInputVal: Dispatch<SetStateAction<inputValType>>;
  onClick: () => void;
  locationVal: postReservationDataType;
}

const WrapComponents = (props: WrapLeftComponentsProps) => {
  const { checkInDate, checkOutDate, daysDifference, paymentDate, onClick, inputVal, setInputVal, locationVal } = props;

  return (
    <>
      <ComponentsWrapper>
        <CardNotice hostName={locationVal.hostName} />
        <ReserveInfo checkInDate={checkInDate} checkOutDate={checkOutDate} />
        <SelectPayment price={locationVal.roomPrice} daysDifference={daysDifference} paymentDate={paymentDate} />
        <PaymentWay />
        <SendingMessage
          hostName={locationVal.hostName}
          yearsOfHosting={locationVal.yearsOfHosting}
          inputVal={inputVal}
          setInputVal={setInputVal}
        />
        <RefundPolicy checkInDate={checkInDate} />
        <PostButton onClick={onClick} buttonText={PostContent.title} />
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
