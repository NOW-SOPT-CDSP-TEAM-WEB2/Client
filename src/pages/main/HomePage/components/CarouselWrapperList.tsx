import styled from 'styled-components';

import { TestDummy } from '../constants';
const CarouselWrapperList = () => {
  return (
    <CardWrapper>
      {TestDummy.map((elem) => (
        <Card key={elem.id} />
      ))}
    </CardWrapper>
  );
};

export default CarouselWrapperList;

const CardWrapper = styled.ul`
  display: grid;
  /* stylelint-disable-next-line unit-allowed-list */
  grid-template-columns: repeat(5, 1fr);
  width: 124.9rem;
  margin-top: 1.6rem;

  column-gap: 1.6rem;
  row-gap: 3rem;
`;
const Card = styled.div`
  width: 23.7rem;
  height: 31.2rem;

  background-color: ${({ theme }) => theme.colors.black};
`;
