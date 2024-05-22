import { useNavigate } from 'react-router-dom';

import { postReserveInfo } from './../utils/postReserveInfo';

export const usePostReserveInfo = () => {
  const navigate = useNavigate();

  const submitInfo = async (inputVal) => {
    try {
      const response = await postReserveInfo(inputVal);
      const roomId = response.headers.location;

      /*       alert('예약이 완료되었습니다!');
      navigate('/main'); */
    } catch (err) {
      console.log(err);
    }
  };

  return { submitInfo };
};
