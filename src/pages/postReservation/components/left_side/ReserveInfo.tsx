import styled from 'styled-components';

import { ReserInfoContent } from '../../constatnts/postResevationText.ts';

interface ReserveInfoProps {
  checkInDate: string;
  checkOutDate: string;
}

const ReserveInfo = (props: ReserveInfoProps) => {
  const { checkInDate, checkOutDate } = props;
  return (
    <ReserveInfoWrapper>
      <ReserveInfoTitle>{ReserInfoContent.title}</ReserveInfoTitle>
      <ReserveContentWrapper>
        <ReserveDescribeWrapper>
          <ReserveDescribeTitle> {ReserInfoContent.content1} </ReserveDescribeTitle>
          <ReserveDescribeTxt>
            {checkInDate}-{checkOutDate}
          </ReserveDescribeTxt>
        </ReserveDescribeWrapper>
        <ReserveDescribeWrapper>
          <ReserveInfoEditTxt>{ReserInfoContent.content_edit}</ReserveInfoEditTxt>
        </ReserveDescribeWrapper>
      </ReserveContentWrapper>
      <ReserveContentWrapper>
        <ReserveDescribeWrapper>
          <ReserveDescribeTitle> {ReserInfoContent.content2} </ReserveDescribeTitle>
          <ReserveDescribeTxt> {ReserInfoContent.content2_txt}</ReserveDescribeTxt>
        </ReserveDescribeWrapper>
        <ReserveDescribeWrapper>
          <ReserveInfoEditTxt>{ReserInfoContent.content_edit}</ReserveInfoEditTxt>
        </ReserveDescribeWrapper>
      </ReserveContentWrapper>
    </ReserveInfoWrapper>
  );
};

export default ReserveInfo;

const ReserveInfoWrapper = styled.div`
  width: 43.5rem;
  padding: 2.4rem 0 2.4rem 0;

  border-bottom: 1px solid ${({ theme }) => theme.colors.gray400};
`;

const ReserveInfoTitle = styled.p`
  ${({ theme }) => theme.fonts.heading04};
`;
const ReserveDescribeTitle = styled.p`
  ${({ theme }) => theme.fonts.body01_middle};
`;
const ReserveDescribeTxt = styled.p`
  ${({ theme }) => theme.fonts.body01_light};
`;

const ReserveInfoEditTxt = styled.p`
  margin-right: 0.8rem;
  ${({ theme }) => theme.fonts.body01_heavy};
  border-bottom: 1px solid ${({ theme }) => theme.colors.black};
`;

const ReserveContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 45rem;
  padding: 2.4rem 2.2rem 0 0;
`;

const ReserveDescribeWrapper = styled.div`
  position: relative;
  top: 50%;
`;
