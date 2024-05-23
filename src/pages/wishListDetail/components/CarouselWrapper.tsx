import styled from 'styled-components';

import CarouselWrapperComponentWish from '../../../components/commons/carousel/CarouselWrapperComponentWish';
import { wishListApiDataType } from '../../wishList/utils/getWishList';

interface carouselWrapperProps {
  wishList: wishListApiDataType[];
}

const CarouselWrapper = (props: carouselWrapperProps) => {
  const { wishList } = props;
  return (
    <CardWrapper>
      {wishList.map((wish) => (
        <CarouselWrapperComponentWish key={wish.roomId} wishList={wish} />
      ))}
    </CardWrapper>
  );
};

export default CarouselWrapper;

const CardWrapper = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  width: 116.6rem;

  column-gap: 3.8rem;
  row-gap: 3rem;
`;

const Card = styled.div`
  width: 26.3rem;
  height: 34.8rem;

  background-color: ${({ theme }) => theme.colors.black};
`;
