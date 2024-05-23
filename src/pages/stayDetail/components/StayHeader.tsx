/* eslint-disable import/order */
import styled from 'styled-components';

import { BentoIcon, HeartPinkIcon, ShareIcon } from '../../../assets/svgs';
import Divider from './Divider';

interface StayHeaderProps {
  roomName: string;
  roomImageList: string[];
}

const StayHeader = (props: StayHeaderProps) => {
  const { roomName, roomImageList } = props;
  const displayName = roomName || '';

  const imageList = [roomImageList[1], roomImageList[2], roomImageList[3], roomImageList[4]];
  const renderImageList = imageList.map((images, index) => <SubImg key={index} src={images} />);
  return (
    <StayHeaderWrapper>
      <Divider />
      <TextBox>
        <StayNameText>{displayName}</StayNameText>
        <IconBox>
          <IconWrapper>
            <ShareIc />
            <Text>공유하기</Text>
          </IconWrapper>
          <IconWrapper>
            <HeartPinkIc />
            <Text>저장 목록</Text>
          </IconWrapper>
        </IconBox>
      </TextBox>
      <ImgArea>
        <ImgWrapper>
          <MainImgWrapper src={roomImageList[0]} />
          <SubImgWrapper>{renderImageList}</SubImgWrapper>
        </ImgWrapper>
        <BtnWrapper>
          <BentoIcon />
          <BtnText>사진 모두 보기</BtnText>
        </BtnWrapper>
      </ImgArea>
    </StayHeaderWrapper>
  );
};

export default StayHeader;

//이미지 영역
const ImgWrapper = styled.div`
  display: flex;
  gap: 0.7rem;
`;
const MainImgWrapper = styled.img`
  width: 42.8rem;
  height: 36.2rem;
  border-radius: 1rem 0 0 1rem;
`;

const SubImgWrapper = styled.span`
  display: flex;
  gap: 0.7rem;
  width: 42.8rem;
  height: 36.2rem;
  flex-wrap: wrap;
`;
const SubImg = styled.img`
  width: 20.6rem;
  height: 17.8rem;
  &:nth-child(2) {
    border-radius: 0 1rem 0 0;
  }
  &:nth-child(4) {
    border-radius: 0 0 1rem 0;
  }
`;

//전체 페이지
const StayHeaderWrapper = styled.div`
  width: 136.6rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
//상단 제목 영역
const TextBox = styled.div`
  width: 136.6rem;
  padding: 2.3rem 25.6rem;
  gap: 3.2rem;
  display: flex;
`;
const StayNameText = styled.p`
  width: 68.8rem;
  ${({ theme }) => theme.fonts.heading03};
  color: ${({ theme }) => theme.colors.black};
`;
//상단 아이콘 영역
const IconBox = styled.span`
  width: 13.4rem;
  gap: 0.6rem;
  display: flex;
`;
const IconWrapper = styled.span`
  display: flex;
  align-items: center;
  margin: 0;
  padding: 0;
`;

const ShareIc = styled(ShareIcon)`
  margin: 0.5rem;
`;
const HeartPinkIc = styled(HeartPinkIcon)`
  margin: 0.5rem;
`;
const Text = styled.p`
  ${({ theme }) => theme.fonts.body03_middle};
  color: ${({ theme }) => theme.colors.black};
  margin: 0.7rem 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.black};
`;

//하단 이미지 영역
const ImgArea = styled.span`
  width: 136.6rem;
  height: 36.3rem;
  padding: 0 25.6rem;
  position: relative;
`;
//하단 버튼
const BtnWrapper = styled.span`
  position: absolute;
  bottom: 2rem;
  right: 27.6rem;
  width: 10.3rem;
  border: 1px solid;
  border-radius: 6px;
  border-color: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.white};
  padding: 0.6rem 1rem;
  gap: 0.6rem;
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.white};
`;
const BtnText = styled.p`
  ${({ theme }) => theme.fonts.body03_middle};
  color: ${({ theme }) => theme.colors.black};
`;
