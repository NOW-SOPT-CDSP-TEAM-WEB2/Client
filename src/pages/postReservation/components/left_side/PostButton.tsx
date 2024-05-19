import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

interface ButtonProps {
  buttonText: string;
  onClick: () => void;
}

const PostButton = (props: ButtonProps) => {
  const navigate = useNavigate();

  const onClickPost = () => {
    alert('예약이 완료되었습니다.');
    navigate('/main');
  };

  return (
    <>
      <PostButtonWrapper>
        <PostResevationButton onClick={onClickPost}>{props.buttonText}</PostResevationButton>
      </PostButtonWrapper>
    </>
  );
};

export default PostButton;

const PostButtonWrapper = styled.div`
  display: flex;
`;

const PostResevationButton = styled.button`
  width: 10.4rem;
  height: 4.4rem;

  color: ${({ theme }) => theme.colors.white};

  background-color: ${({ theme }) => theme.colors.pink400};
  border-radius: 6px;
  ${({ theme }) => theme.fonts.title02_middle};
`;
