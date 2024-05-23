import styled from 'styled-components';

import { ChipInfo } from '../constants';

const Chips = () => {
  return (
    <ChipWrapper>
      {ChipInfo.map((info) => {
        return <Chip key={info.id}>{info.text}</Chip>;
      })}
    </ChipWrapper>
  );
};

export default Chips;

const ChipWrapper = styled.div`
  display: flex;
  gap: 0.8rem;
  margin: 1.2rem 0 1.6rem 0;
`;

const Chip = styled.button`
  padding: 0.5rem 1.2rem;

  color: ${({ theme }) => theme.colors.gray800};
  ${({ theme }) => theme.fonts.body02_heavy};
  border: solid 1px ${({ theme }) => theme.colors.gray400};
  border-radius: 32px;

  &:hover {
    color: ${({ theme }) => theme.colors.white};

    background-color: ${({ theme }) => theme.colors.pink400};
  }
`;
