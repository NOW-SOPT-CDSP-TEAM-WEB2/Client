/* eslint-disable import/order */
// import { React } from 'react';
import { Dispatch, SetStateAction } from 'react';
import styled from 'styled-components';

import { SendingMessagetoHost } from '../../../../assets/svgs';
import { SendingMessageContent } from '../../constatnts/postReservationText.ts';
import { inputValType } from './../../PostReservationPage';

interface SendingMessageProps {
  hostName: string;
  yearsOfHosting: number;
  inputVal: inputValType;
  setInputVal: Dispatch<SetStateAction<inputValType>>;
}

const SendingMessage = (props: SendingMessageProps) => {
  const { hostName, yearsOfHosting, inputVal, setInputVal } = props;
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setInputVal((prev: inputValType) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <SendingMessageWrapper>
      <SendingTitle>{SendingMessageContent.title}</SendingTitle>
      <ContentWrapper>
        <SendingContent>{SendingMessageContent.content}</SendingContent>
        <HostProfileWrapper>
          <SendingMessagetoHost />
          <HostInfoWrapper>
            <HostName> {hostName} </HostName>
            <HostYears>
              {SendingMessageContent.hostInfo} {yearsOfHosting}년
            </HostYears>
          </HostInfoWrapper>
        </HostProfileWrapper>
        <InputCard
          name="messageToHost"
          onChange={handleChange}
          value={inputVal.messageToHost}
          placeholder={`${hostName}${SendingMessageContent.hostMessage}`}
        />
      </ContentWrapper>
    </SendingMessageWrapper>
  );
};

export default SendingMessage;

const SendingMessageWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 4rem 0 2.2rem 0;

  border-bottom: 1px solid ${({ theme }) => theme.colors.gray400};
`;

const SendingTitle = styled.p`
  ${({ theme }) => theme.fonts.heading04};
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 2rem;
`;

const SendingContent = styled.p`
  ${({ theme }) => theme.fonts.body03_middle};
  padding-bottom: 1.2rem;
`;

const HostProfileWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding-bottom: 1.8rem;
`;

const HostInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 1.4rem;
`;

const HostName = styled.p`
  ${({ theme }) => theme.fonts.body01_heavy};
`;

const HostYears = styled.p`
  ${({ theme }) => theme.fonts.body03_middle};
`;

const InputCard = styled.textarea`
  width: 42.7rem;
  height: 9.2rem;
  padding: 1.3rem 0.8rem 1.3rem 0.8rem;

  ${({ theme }) => theme.fonts.body01_light};
  border: 1px solid ${({ theme }) => theme.colors.gray600};
  border-radius: 6px;

  &::placeholder {
    position: absolute;
    top: 0;
    left: 0;
    padding: 1.3rem 0.8rem 1.3rem 0.8rem;

    transform: translate(0, 0);
  }
  &:focus::placeholder {
    opacity: 0; /* Hide placeholder on focus */
  }
`;
