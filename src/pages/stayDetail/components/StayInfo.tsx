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
  StarIcon,
} from '../../../assets/svgs';
import { STAY_INFO } from '../constants';

const StayInfo = () => {
  const rate = STAY_INFO.roomInfo.Rate;

  return (
    <StayInfoPage>
      {/* 숙소 스펙 정리 부분 */}
      <InfoWrapper>
        <Title>{STAY_INFO.roomLocation}</Title>
        <InfoText>
          최대 인원 {STAY_INFO.roomInfo.maxGuests}명 • 침실 {STAY_INFO.roomInfo.bedrooms} • 침대{' '}
          {STAY_INFO.roomInfo.beds}개 • 욕실 {STAY_INFO.roomInfo.bathrooms}개
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
              <RateNum>{STAY_INFO.roomInfo.Rate}</RateNum>
              <RateIconSpan>
                {rate >= 1 && rate < 2 && <StarIcon />}
                {rate >= 2 && rate < 3 && (
                  <>
                    <StarIcon />
                    <StarIcon />
                  </>
                )}
                {rate >= 3 && rate < 4 && (
                  <>
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                  </>
                )}
                {rate >= 4 && rate < 5 && (
                  <>
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                  </>
                )}
                {rate === 5 && (
                  <>
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
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
            <HostName>호스트 : {STAY_INFO.hostName} 님</HostName>
            {STAY_INFO.isSuperHost ? (
              <HostingYear>슈퍼호스트 : 호스팅 경력 {STAY_INFO.yearsOfHosting}년</HostingYear>
            ) : (
              <HostingYear>호스트 : 호스팅 경력 {STAY_INFO.yearsOfHosting}년</HostingYear>
            )}
          </TextSpan>
        </HostInfoWrapper>
      </InfoWrapper>
      {/* 숙소 키워드 부분 */}
      <InfoKeyWordWrapper>
        {STAY_INFO.isSuperHost ? (
          <IsSuperHost>
            <BadgeIc />
            <TextArea>
              <BoldText>{STAY_INFO.hostName}님은 슈퍼호스트입니다</BoldText>
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
            <BoldText>{STAY_INFO.hostName} 전까지 무료로 취소 가능</BoldText>
            <ThinText>여행 계획이 변경되어도 전액 환불받으실 수 있습니다.</ThinText>
          </TextArea>
        </CanlenderArea>
      </InfoKeyWordWrapper>
      <DescriptionWrapper>
        <DescriptionText>{STAY_INFO.description}</DescriptionText>
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
  width: 49.8rem;
  margin-top: 2.8rem;
  padding: 1.6rem 1.8rem;
  display: flex;

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
  width: 4.4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0.2rem 0;
  margin-left: 2.2rem;
  gap: 0.6rem;
`;

const RateIconSpan = styled.span`
  width: 4.4rem;
  display: flex;
  justify-content: center;
`;

const RateNum = styled.p`
  ${({ theme }) => theme.fonts.title01};
  color: ${({ theme }) => theme.colors.black};
`;

const ReviewSpan = styled.span`
  width: 4.4rem;

  margin: 0.1rem 0rem 0.1rem 1.4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CountReview = styled.p`
  ${({ theme }) => theme.fonts.title01};
  color: ${({ theme }) => theme.colors.black};
`;

const ReviewText = styled.p`
  ${({ theme }) => theme.fonts.detail1_middle};
  color: ${({ theme }) => theme.colors.black};
  border-bottom: 1px solid;
  border-color: ${({ theme }) => theme.colors.black};
`;
//호스트 프로필 박스
const HostInfoWrapper = styled.div`
  margin-top: 3.2rem;
  width: 49.8rem;
  height: 3rem;
  gap: 1.8rem;
  display: flex;
`;
const ProfileSpan = styled.div`
  width: 3.2rem;
  height: 3rem;
  position: relative;
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
  width: 49.8rem;
  padding-top: 2.2rem;
  padding-bottom: 3rem;
  border-bottom: 1px solid;
  border-color: ${({ theme }) => theme.colors.gray400};
  gap: 2rem;
`;

const IsSuperHost = styled.div`
  height: 3.2rem;
  width: 49.8rem;
  gap: 2.2rem;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`;

const CanlenderArea = styled.div`
  height: 3.2rem;
  width: 49.8rem;
  gap: 2.2rem;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`;

const BadgeIc = styled(BadgeIcon)`
  margin-left: 0.4rem;
  top: 0;
`;
const KeyIc = styled(KeyIcon)`
  margin-left: 0.4rem;
  top: 0;
`;

const CalendarIc = styled(CalendarIcon)`
  margin-left: 0.4rem;
  top: 0;
`;

const TextArea = styled.div`
  width: 44.8rem;
`;

const BoldText = styled.p`
  ${({ theme }) => theme.fonts.body02_heavy};
  color: ${({ theme }) => theme.colors.black};
  margin-bottom: 0.3rem;
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
  border-bottom: 1px solid;
  border-color: ${({ theme }) => theme.colors.gray400};
`;

const DescriptionText = styled.p`
  padding-right: 5rem;
  ${({ theme }) => theme.fonts.body02_middle};
`;

const ViewMoreSpan = styled.div`
  width: 5rem;
  display: flex;
  flex-direction: row;
`;

const ViewMoreText = styled.p`
  ${({ theme }) => theme.fonts.body02_middle};
  color: ${({ theme }) => theme.colors.black};

  border-bottom: 1px solid;
  border-color: ${({ theme }) => theme.colors.black};
  white-space: pre-wrap;
`;
