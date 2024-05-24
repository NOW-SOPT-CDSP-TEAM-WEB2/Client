/* eslint-disable simple-import-sort/imports */
import styled from 'styled-components';

import { getPrice } from './../../utils/getPrice';
import { SelectPaymentContent } from '../../constatnts/postReservationText';

interface SelectPaymentProps {
  price: number;
  daysDifference: number;
  paymentDate: string;
}

const SelectPayment = (props: SelectPaymentProps) => {
  const { price, daysDifference, paymentDate } = props;
  const { totalPrice, departPrcie, otherPrice } = getPrice(price, daysDifference);

  return (
    <>
      <SelectPaymentWrapper>
        <SelectPaymentTitle>{SelectPaymentContent.title}</SelectPaymentTitle>
        <SelectPaymentCard>
          <InputRadioWrapper>
            <PaymentOption1Txt>지금 ₩{totalPrice.toLocaleString()}결제 </PaymentOption1Txt>
            <RadioInputOption type="radio" defaultChecked />
          </InputRadioWrapper>
          <InputRadioWrapper_divider>
            <Option2TxtWrapper>
              <PaymentOption2Txt>{SelectPaymentContent.content1}</PaymentOption2Txt>
              <PaymentOption2DescrTxt>
                오늘은 ₩{departPrcie.toLocaleString()}, {paymentDate}에는 ₩{otherPrice.toLocaleString()}의 금액을
                결제하세요. {SelectPaymentContent.content2}{' '}
                <PaymentOption2Detail>{SelectPaymentContent.content3}</PaymentOption2Detail>
              </PaymentOption2DescrTxt>
            </Option2TxtWrapper>
            <RadioInputOption type="radio" />
          </InputRadioWrapper_divider>
        </SelectPaymentCard>
      </SelectPaymentWrapper>
    </>
  );
};

export default SelectPayment;

const SelectPaymentWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 4rem 0 2.4rem 0;

  border-bottom: 1px solid ${({ theme }) => theme.colors.gray400};
`;

const SelectPaymentTitle = styled.p`
  ${({ theme }) => theme.fonts.heading04};
  padding-bottom: 2rem;
`;
const SelectPaymentCard = styled.div`
  width: 42.7rem;
  height: 14rem;

  border: 1px solid ${({ theme }) => theme.colors.gray400};
  border-radius: 8px;
`;

const PaymentOption1Txt = styled.p`
  padding: 1.45rem 0.8rem 1.45rem 1.4rem;
  ${({ theme }) => theme.fonts.body01_heavy};
`;
const Option2TxtWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 1.4rem 0.8rem 1.8rem 1.4rem;
`;

const PaymentOption2Txt = styled.p`
  ${({ theme }) => theme.fonts.body01_heavy};
`;
const PaymentOption2DescrTxt = styled.p`
  ${({ theme }) => theme.fonts.body01_light};
`;

const RadioInputOption = styled.input`
  ${({ theme }) => theme.fonts.body01_heavy};
`;
const InputRadioWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding-right: 1rem;
  ${({ theme }) => theme.fonts.body01_heavy};
`;

const InputRadioWrapper_divider = styled.div`
  display: flex;
  justify-content: space-between;
  padding-right: 1rem;
  ${({ theme }) => theme.fonts.body01_heavy};
  border-top: 1px solid ${({ theme }) => theme.colors.black};
`;

const PaymentOption2Detail = styled.span`
  ${({ theme }) => theme.fonts.body01_heavy};
  border-bottom: 1px solid ${({ theme }) => theme.colors.black};
`;
