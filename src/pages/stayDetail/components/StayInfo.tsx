import { useEffect, useState } from 'react';
import styled from 'styled-components';

import {
  ArrowRightIcon,
  BadgeIcon,
  CalendarIcon,
  KeyIcon,
  LeafLeftIcon,
  LeafRightIcon,
  MedalIcon,
  ProfileImgIcon,
  Star8Icon,
} from '../../../assets/svgs';
import { roomDetailType, roomInfoType } from '../types/getStayDetailType';
import { convertNewlinesToBreaks } from '../utils/convertNewLineToBreak';

interface StayInfoProps {
  roomLocation: string;
  roomRate: number;
  roomInfo: roomInfoType;
  roomDetail: roomDetailType;
  isSuperHost: boolean;
}

const StayInfo = (props: StayInfoProps) => {
  const { roomLocation, roomInfo, roomRate, roomDetail, isSuperHost } = props;
  const rate = roomRate;
  const [convertedText, setConvertedText] = useState('');

  useEffect(() => {
    const convertText = convertNewlinesToBreaks(roomDetail.description);
    setConvertedText(convertText);
  }, [roomDetail.description]);

  return (
    <StayInfoPage>
      {/* 숙소 스펙 정리 부분 */}
      <InfoWrapper>
        <Title>{roomLocation}</Title>
        <InfoText>
          최대 인원 {roomInfo.maxGuests}명 • 침실 {roomInfo.bedrooms} • 침대 {roomInfo.beds}개 • 욕실
          {roomInfo.bathrooms}개
        </InfoText>
        <RateWrapper>
          <RateBox>
            <PreferenceSpan>
              <LeafLeftIcon />
              {/*줄바꿈 튀어나오는 부분 정리하기*/}
              <TextDiv>
                <UpperText>게스트</UpperText>
                <LowerText>선호</LowerText>
              </TextDiv>
              <LeafRightIcon />
            </PreferenceSpan>
            <LovedText>에어비앤비 게스트에게 가장 사랑받는 숙소</LovedText>
            <RateSpan>
              <RateNum>{roomRate}</RateNum>
              <RateIconSpan>
                {rate >= 1 && rate < 2 && <Star8Icon />}
                {rate >= 2 && rate < 3 && (
                  <>
                    <Star8Icon />
                    <Star8Icon />
                  </>
                )}
                {rate >= 3 && rate < 4 && (
                  <>
                    <Star8Icon />
                    <Star8Icon />
                    <Star8Icon />
                  </>
                )}
                {rate >= 4 && rate < 5 && (
                  <>
                    <Star8Icon />
                    <Star8Icon />
                    <Star8Icon />
                    <Star8Icon />
                  </>
                )}
                {rate === 5 && (
                  <>
                    <Star8Icon />
                    <Star8Icon />
                    <Star8Icon />
                    <Star8Icon />
                    <Star8Icon />
                  </>
                )}
              </RateIconSpan>
            </RateSpan>
          </RateBox>
          <ReviewSpan>
            <CountReview>84개</CountReview>
            <ReviewText>후기</ReviewText>
          </ReviewSpan>
        </RateWrapper>
        <HostInfoWrapper>
          <ProfileSpan>
            {/* 정렬 맞추기 */}
            <ProfileImgIc />
            <MedalIc />
          </ProfileSpan>
          <TextSpan>
            <HostName>호스트 : {roomDetail.hostName} 님</HostName>
            {isSuperHost ? (
              <HostingYear>슈퍼호스트 : 호스팅 경력 {roomDetail.yearsOfHosting}년</HostingYear>
            ) : (
              <HostingYear>호스트 : 호스팅 경력 {roomDetail.yearsOfHosting}년</HostingYear>
            )}
          </TextSpan>
        </HostInfoWrapper>
      </InfoWrapper>
      {/* 숙소 키워드 부분 */}
      <InfoKeyWordWrapper>
        {isSuperHost ? (
          <IsSuperHost>
            <BadgeIc />
            <TextArea>
              <BoldText>{roomDetail.hostName}님은 슈퍼호스트입니다</BoldText>
              <ThinText>슈퍼호스트는 풍부한 경험과 높은 평점을 자랑하는 호스트입니다.</ThinText>
            </TextArea>
          </IsSuperHost>
        ) : null}
        <CanlenderArea>
          <KeyIc />
          <TextArea>
            <BoldText>순조로운 체크인 과정</BoldText>
            <ThinText>최근 숙박한 게스트 중 100%가 체크인 과정에 별점 5점을 준 숙소입니다.</ThinText>
          </TextArea>
        </CanlenderArea>
        <CanlenderArea>
          <CalendarIc />
          <TextArea>
            {/* placeholder 값 하루 전으로 날짜 바꾸기 */}
            <BoldText>{roomDetail.hostName} 전까지 무료로 취소 가능</BoldText>
            <ThinText>여행 계획이 변경되어도 전액 환불받으실 수 있습니다.</ThinText>
          </TextArea>
        </CanlenderArea>
      </InfoKeyWordWrapper>
      <DescriptionWrapper>
        <DescriptionText>{convertedText}</DescriptionText>
        <ViewMoreSpan>
          <ViewMoreText>더보기</ViewMoreText>
          <ArrowRightIcon />
        </ViewMoreSpan>
      </DescriptionWrapper>
    </StayInfoPage>
  );
};

export default StayInfo;

const StayInfoPage = styled.div`
  display: flex;
  flex-direction: column;
  width: 49.8rem;
`;

const InfoWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 49.8rem;
  padding-top: 2.6rem;
  padding-bottom: 2rem;

  border-bottom: 1px solid ${({ theme }) => theme.colors.gray400};
`;

const Title = styled.h1`
  color: ${({ theme }) => theme.colors.black};
  ${({ theme }) => theme.fonts.heading04};
`;

const InfoText = styled.p`
  margin-top: 1.2rem;

  color: ${({ theme }) => theme.colors.black};
  ${({ theme }) => theme.fonts.body02_middle};
`;

//게스트 선호 숙소 박스
const RateWrapper = styled.div`
  display: flex;
  width: 49.8rem;
  margin-top: 2.8rem;
  padding: 1.6rem 1.8rem;

  border: 1px solid ${({ theme }) => theme.colors.gray400};
  border-radius: 8px;
`;

const RateBox = styled.div`
  display: flex;
  align-items: center;
  width: 40.2rem;
  padding-right: 2rem;

  border-right: 1px solid ${({ theme }) => theme.colors.gray400};
`;

const PreferenceSpan = styled.span`
  display: flex;
  flex-direction: row;
  width: 10.1rem;
  height: 3.2rem;
`;

const TextDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const UpperText = styled.p`
  ${({ theme }) => theme.fonts.title02_middle};
  color: ${({ theme }) => theme.colors.black};
`;

const LowerText = styled.p`
  ${({ theme }) => theme.fonts.title02_middle};
  color: ${({ theme }) => theme.colors.black};
`;

const LovedText = styled.p`
  width: 21.1rem;

  color: ${({ theme }) => theme.colors.black};
  ${({ theme }) => theme.fonts.body02_middle};
`;
const RateSpan = styled.span`
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  align-items: center;
  width: 4.4rem;
  margin-left: 2.2rem;
  padding: 0.2rem 0;
`;

const RateIconSpan = styled.span`
  display: flex;
  justify-content: center;
  width: 4.4rem;
`;

const RateNum = styled.p`
  ${({ theme }) => theme.fonts.title01};
  color: ${({ theme }) => theme.colors.black};
`;

const ReviewSpan = styled.span`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 4.4rem;
  margin: 0.1rem 0 0.1rem 1.4rem;
`;

const CountReview = styled.p`
  ${({ theme }) => theme.fonts.title01};
  color: ${({ theme }) => theme.colors.black};
`;

const ReviewText = styled.p`
  ${({ theme }) => theme.fonts.detail1_middle};
  color: ${({ theme }) => theme.colors.black};

  border-color: ${({ theme }) => theme.colors.black};
  border-bottom: 1px solid;
`;
//호스트 프로필 박스
const HostInfoWrapper = styled.div`
  display: flex;
  gap: 1.8rem;
  width: 49.8rem;
  height: 3rem;
  margin-top: 3.2rem;
`;
const ProfileSpan = styled.div`
  position: relative;
  width: 3.2rem;
  height: 3rem;
`;

const ProfileImgIc = styled(ProfileImgIcon)`
  position: absolute;
  left: 0;
`;

const MedalIc = styled(MedalIcon)`
  position: absolute;
  right: 0;
  bottom: 0;
`;

const TextSpan = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const HostName = styled.p`
  ${({ theme }) => theme.fonts.body02_heavy};
  color: ${({ theme }) => theme.colors.black};
`;

const HostingYear = styled.p`
  ${({ theme }) => theme.fonts.detail1_middle};
  color: ${({ theme }) => theme.colors.black};
`;

//스펙 키워드 박스
const InfoKeyWordWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 49.8rem;
  padding-top: 2.2rem;
  padding-bottom: 3rem;

  border-color: ${({ theme }) => theme.colors.gray400};
  border-bottom: 1px solid;
`;

const IsSuperHost = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2.2rem;
  justify-content: flex-start;
  width: 49.8rem;
  height: 3.2rem;
`;

const CanlenderArea = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2.2rem;
  justify-content: flex-start;
  width: 49.8rem;
  height: 3.2rem;
`;

const BadgeIc = styled(BadgeIcon)`
  top: 0;
  margin-left: 0.4rem;
`;
const KeyIc = styled(KeyIcon)`
  top: 0;
  margin-left: 0.4rem;
`;

const CalendarIc = styled(CalendarIcon)`
  top: 0;
  margin-left: 0.4rem;
`;

const TextArea = styled.div`
  width: 44.8rem;
`;

const BoldText = styled.p`
  margin-bottom: 0.3rem;

  ${({ theme }) => theme.fonts.body02_heavy};
  color: ${({ theme }) => theme.colors.black};
`;

const ThinText = styled.p`
  ${({ theme }) => theme.fonts.detail1_middle};
  color: ${({ theme }) => theme.colors.gray800};
`;
//상세 설명 박스
const DescriptionWrapper = styled.div`
  width: 49.8rem;
  padding-top: 2.8rem;
  padding-bottom: 3.2rem;

  border-color: ${({ theme }) => theme.colors.gray400};
  border-bottom: 1px solid;
`;

const DescriptionText = styled.div`
  padding-right: 5rem;

  ${({ theme }) => theme.fonts.body02_middle};
`;

const ViewMoreSpan = styled.div`
  display: flex;
  flex-direction: row;
  width: 5rem;
`;

const ViewMoreText = styled.p`
  ${({ theme }) => theme.fonts.body02_middle};
  color: ${({ theme }) => theme.colors.black};

  border-color: ${({ theme }) => theme.colors.black};
  border-bottom: 1px solid;
`;
