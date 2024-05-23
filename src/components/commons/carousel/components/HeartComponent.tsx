import { styled } from 'styled-components';

import { HeartPink24Icon } from '../../../../assets/svgs';

// interface HeartComponentProps {
//   isWishList: boolean;
// }
// api 연결 시 wishList boolean값 받아서 사용하세용~~
const HeartComponent = () => {
  // const { isWishList } = props;
  return (
    <HeartComponentWrapper>
      <HeartPink24Icon />
    </HeartComponentWrapper>
  );
};

export default HeartComponent;

const HeartComponentWrapper = styled.div`
  position: absolute;
  z-index: 1;
  float: right;
  width: 6.7rem;
  height: 2.1rem;
  margin: 1.3rem 1.5rem 0 20rem;
`;
