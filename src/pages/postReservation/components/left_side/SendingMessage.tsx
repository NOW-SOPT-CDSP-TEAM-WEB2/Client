import React from 'react';
import styled from 'styled-components';

import { SendingMessagetoHost } from '../../../../assets/svgs';
import { SendingMessageContent } from '../../constatnts/postResevationText.ts';

type Props = {
  hostName: string;
  yearsOfHosting: string;
  messageToHost: string;
  onChange: (value: string) => void;
};

const SendingMessage = (props: Props) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    props.onChange(e.target.value);
  };
  return (
    <>
      <SendingMessageWrapper>
        <SendingTitle>{SendingMessageContent.title}</SendingTitle>
        <ContentWrapper>
          <SendingContent>{SendingMessageContent.content}</SendingContent>
          <HostProfileWrapper>
            <SendingMessagetoHost />
            <HostInfoWrapper>
              <HostName> {props.hostName} </HostName>
              <HostYears>
                {' '}
                {SendingMessageContent.hostInfo} {props.yearsOfHosting}년{' '}
              </HostYears>
            </HostInfoWrapper>
          </HostProfileWrapper>
          <InputCard
            type="text"
            value={props.messageToHost}
            onChange={handleChange}
            placeholder={`${props.hostName}${SendingMessageContent.hostMessage}`}
          />
        </ContentWrapper>
      </SendingMessageWrapper>
    </>
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
