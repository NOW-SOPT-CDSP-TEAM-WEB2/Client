import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

interface PostButtonProps {
  buttonText: string;
  onClick: () => void;
}

const PostButton = (props: PostButtonProps) => {
  const { buttonText, onClick } = props;
  const navigate = useNavigate();

  const onClickPost = () => {
    onClick();
    alert('예약이 완료되었습니다.');
    navigate('/main');
  };

  return (
    <>
      <PostResevationButton onClick={onClickPost}>{buttonText}</PostResevationButton>
    </>
  );
};

export default PostButton;

const PostResevationButton = styled.button`
  width: 10.4rem;
  height: 4.4rem;

  color: ${({ theme }) => theme.colors.white};

  background-color: ${({ theme }) => theme.colors.pink400};
  border-radius: 6px;
  ${({ theme }) => theme.fonts.title02_middle};
`;
