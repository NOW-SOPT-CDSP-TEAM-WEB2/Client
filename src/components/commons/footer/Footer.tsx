import styled from 'styled-components';

import { FOOTER_COPYRIGHT, FOOTER_TAG } from '../../../assets/constants/footerTag';
import {
  BlogBlackIcon,
  CopyrightIcon,
  FacebookBlackIcon,
  InstaBalckIcon,
  InternetBlackIcon,
  NaverBlackIcon,
  XBlackIcon,
} from '../../../assets/svgs';

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterTagWrapper>
        {FOOTER_TAG.map((tagCategory, idx) => (
          <FooterTagContainer key={tagCategory[0].title + idx.toString()}>
            {tagCategory.map((category, idx) => (
              <FooterTag key={category + idx.toString()} $isBold={category.id === 0}>
                {category.content}
              </FooterTag>
            ))}
          </FooterTagContainer>
        ))}
      </FooterTagWrapper>
      <FooterInfoContainer>
        <SnsInfoContainer>
          <CopyrightContainer>
            <CopyrightIcon />
            {FOOTER_COPYRIGHT.map((item, idx) => (
              <CopyrightSpan key={item.content + idx.toString()}>{item.content}</CopyrightSpan>
            ))}
          </CopyrightContainer>
          <SnsContainer>
            <LangDiv>
              <InternetBlackIcon />
              <SnsSpan>한국어(KR)</SnsSpan>
            </LangDiv>
            <SnsSpan>₩ KRW</SnsSpan>
            <SnsIconWrapper>
              <FacebookBlackIcon />
              <XBlackIcon />
              <InstaBalckIcon />
              <BlogBlackIcon />
              <NaverBlackIcon />
            </SnsIconWrapper>
          </SnsContainer>
        </SnsInfoContainer>
      </FooterInfoContainer>
    </FooterWrapper>
  );
};

export default Footer;

const FooterWrapper = styled.footer`
  position: fixed;
  bottom: 0;

  background-color: ${({ theme }) => theme.colors.gray100};
`;

const FooterTagWrapper = styled.div`
  display: flex;
  gap: 1.6rem;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;
  padding: 4rem 25.6rem;

  border-top: 1px solid ${({ theme }) => theme.colors.gray400};
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray400};
`;

const FooterTagContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  align-items: flex-start;
  justify-content: center;
  width: 27.4rem;
`;

const FooterTag = styled.span<{ $isBold: boolean }>`
  color: ${({ theme }) => theme.colors.black};
  ${({ $isBold, theme }) => ($isBold ? theme.fonts.body03_heavy : theme.fonts.body03_light)};
  cursor: pointer;
`;

const FooterInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  align-items: center;
  justify-content: center;
  padding: 0 25.6rem 2.2rem 25.6rem;
`;

const CopyrightContainer = styled.div`
  display: flex;
  gap: 0.4rem;
  align-items: center;
  justify-content: center;
`;

const CopyrightSpan = styled.span`
  color: ${({ theme }) => theme.colors.black};
  ${({ theme }) => theme.fonts.body03_light};
`;

const SnsInfoContainer = styled.div`
  display: flex;
  gap: 11rem;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 1.2rem 0 0.4rem 0;

  border-bottom: 1px solid ${({ theme }) => theme.colors.gray400};
`;

const SnsContainer = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;
  justify-content: space-between;
  padding: 0.55rem 0;
`;

const LangDiv = styled.div`
  display: flex;
  gap: 0.6rem;
  align-items: center;
  justify-content: center;
`;

const SnsSpan = styled.span`
  color: ${({ theme }) => theme.colors.black};
  ${({ theme }) => theme.fonts.body03_heavy};
`;

const SnsIconWrapper = styled.div`
  display: flex;
  gap: 1.2rem;
  align-items: center;
  justify-content: center;

  cursor: pointer;
`;
