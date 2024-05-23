import { isAxiosError } from 'axios';
import { useNavigate } from 'react-router-dom';

import { postReserveInfo } from './../utils/postReserveInfo';

export const usePostReserveInfo = () => {
  const navigate = useNavigate();

  const submitInfo = async (inputVal) => {
    try {
      const roomId = 1;
      const response = await postReserveInfo(inputVal, roomId);
      alert('예약이 완료되었습니다!');
      navigate('/main');
    } catch (err) {
      if (isAxiosError(err)) {
        {
          console.log('AxiosError');
          console.log(inputVal);
          alert(err.response?.data);
        }
      } else {
        console.log(err);
      }
    }
  };

  return { submitInfo };
};
