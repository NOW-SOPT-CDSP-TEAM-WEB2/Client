import styled from 'styled-components';

import {
  HostInfoDetailIcon,
  HostMarkIcon,
  HostProfileIcon,
  PayWarnIcon,
  ShareHostIcon,
  StarHotelDetailIcon,
} from '../../../assets/svgs';

const HostDetail = () => {
  return (
    <HostDetailWrapper>
      <Title>호스트 소개</Title>
      <HostWrapper>
        <HostLeftDiv>
          {/* 호스트소개 왼쪽 */}
          <HostProfileContainer>
            <HostProfile>
              <HostProfileIcon />
              <HostName>Kiwoo</HostName>
              {/* 서버값에 따라 렌더링 필요 */}
              <SuperHostDiv>
                <HostMarkIcon />
                <SuperHostText>슈퍼호스트</SuperHostText>
              </SuperHostDiv>
            </HostProfile>
            <HostDetailInfoContainer>
              <HostDetailInfo>
                <Label>후기</Label>
                <LabelContent>
                  {/* 서버값 연결 */}
                  <ReviewNum>84</ReviewNum>
                  <Label>개</Label>
                </LabelContent>
              </HostDetailInfo>
              <HostDetailInfo>
                <Label>평점</Label>
                <LabelContent>
                  {/* 서버값 연결 */}
                  <ReviewNum>4.94</ReviewNum>
                  <StarHotelDetailIcon />
                </LabelContent>
              </HostDetailInfo>
              <HostDetailInfo>
                <Label>호스팅 경력</Label>
                <LabelContent>
                  {/* 서버값 연결 */}
                  <ReviewNum>2</ReviewNum>
                  <Label>년</Label>
                </LabelContent>
              </HostDetailInfo>
            </HostDetailInfoContainer>
          </HostProfileContainer>
          <HostInfoDetailIcon />
        </HostLeftDiv>
        <HostRightDiv>
          {/* 서버값으로 바꾸기 */}
          <SuperHost>`$Kiwoo 님은 슈퍼호스트입니다.`</SuperHost>
          <SuperHostDetail>
            슈퍼호스트는 풍부한 경험과 높은 평점을 자랑하며 게스트가 숙소에서 편안히 머무를 수 있도록 최선을 다하는
            호스트입니다.
          </SuperHostDetail>
          <ShareHostIc />
          <Divider />
          <PayWarnIc />
        </HostRightDiv>
      </HostWrapper>
    </HostDetailWrapper>
  );
};

export default HostDetail;

const HostDetailWrapper = styled.section`
  width: 100%;
  margin-bottom: 4rem;
`;

const Title = styled.h2`
  margin-bottom: 2rem;

  color: ${({ theme }) => theme.colors.black};
  ${({ theme }) => theme.fonts.heading04};
`;

const HostWrapper = styled.div`
  display: flex;
  gap: 5.5rem;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 2.8rem 3.2rem 2rem 4rem;

  background-color: ${({ theme }) => theme.colors.yellow200};
  border-radius: 10px;
`;

// 호스트 왼쪽
const HostLeftDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.2rem;
`;

const HostProfileContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 29.1rem;
  padding: 3.1rem 2rem 3rem 6rem;

  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 0 4px 10px 0 rgba(42, 42, 42, 0.2);
  border-radius: 20px;
`;
const HostProfile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const HostName = styled.span`
  margin-top: 1.6rem;

  color: ${({ theme }) => theme.colors.black};
  ${({ theme }) => theme.fonts.title01};
`;
const SuperHostDiv = styled.div`
  display: flex;
  align-items: center;

  color: ${({ theme }) => theme.colors.black};
  ${({ theme }) => theme.fonts.body03_middle};
`;
const SuperHostText = styled.span`
  margin-left: 0.2rem;

  color: ${({ theme }) => theme.colors.black};
  ${({ theme }) => theme.fonts.body03_middle};
`;

const HostDetailInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 7.2rem;
`;
const HostDetailInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 100%;

  border-bottom: 1px solid ${({ theme }) => theme.colors.gray400};
  &:nth-child(2) {
    margin-top: 1.3rem;
  }
  &:last-child {
    margin-top: 1.3rem;
    margin-bottom: 0;

    border-bottom: none;
  }
`;
const Label = styled.span`
  color: ${({ theme }) => theme.colors.black};
  ${({ theme }) => theme.fonts.detail3};
`;
const LabelContent = styled.div`
  margin-bottom: 1.3rem;
`;
const ReviewNum = styled.span`
  color: ${({ theme }) => theme.colors.black};
  ${({ theme }) => theme.fonts.title01};
`;

// 호스트 정보 오른쪽
const HostRightDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 43.6rem;
`;

const SuperHost = styled.span`
  margin-bottom: 1.5rem;

  color: ${({ theme }) => theme.colors.black};
  ${({ theme }) => theme.fonts.title02_heavy};
`;
const SuperHostDetail = styled.span`
  margin-bottom: 2.6rem;

  color: ${({ theme }) => theme.colors.black};
  ${({ theme }) => theme.fonts.body02_middle};
`;
const ShareHostIc = styled(ShareHostIcon)`
  margin-bottom: 2.2rem;
`;
const PayWarnIc = styled(PayWarnIcon)``;
const Divider = styled.div`
  width: 100%;
  height: 1px;
  margin-bottom: 2.2rem;

  border: 1px solid ${({ theme }) => theme.colors.gray400};
`;
