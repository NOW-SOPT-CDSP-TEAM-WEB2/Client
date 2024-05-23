import styled from 'styled-components';

const Divider = () => {
  return <Div></Div>;
};

export default Divider;

const Div = styled.div`
  width: 100%;

  border-top: 1px solid ${({ theme }) => theme.colors.gray400};
`;
