import { californiaImg, spainImg } from '../../../../assets/images';
import {
  BeachBlackIcon,
  BeachGrayIcon,
  DesignBlackIcon,
  DesignGrayIcon,
  HotBlackIcon,
  HotGrayIcon,
  ParkBlackIcon,
  ParkGrayIcon,
  SwimmingPoolBlackIcon,
  SwimmingPoolGrayIcon,
  UfoBlackIcon,
  UfoGrayIcon,
} from '../../../../assets/svgs';

interface ContetnType {
  id: number;
  text: string;
}

interface LnbInfoContentType {
  id: number;
  svgBlack: string;
  svgGray: string;
  text: string;
}

export const LnbInfo: LnbInfoContentType[] = [
  {
    id: 1,
    svgBlack: HotBlackIcon,
    svgGray: HotGrayIcon,
    text: '인기 급상승',
  },
  {
    id: 2,
    svgBlack: BeachBlackIcon,
    svgGray: BeachGrayIcon,
    text: '해변',
  },
  {
    id: 3,
    svgBlack: ParkBlackIcon,
    svgGray: ParkGrayIcon,
    text: '산맥',
  },
  {
    id: 4,
    svgBlack: UfoBlackIcon,
    svgGray: UfoGrayIcon,
    text: '특이한 숙소',
  },
  {
    id: 5,
    svgBlack: DesignBlackIcon,
    svgGray: DesignGrayIcon,
    text: '예술 및 문화',
  },
  {
    id: 6,
    svgBlack: SwimmingPoolBlackIcon,
    svgGray: SwimmingPoolGrayIcon,
    text: '즐길거리',
  },
];

export const ChipInfo: ContetnType[] = [
  {
    id: 1,
    text: '#캠핑카',
  },
  {
    id: 2,
    text: '#최고의 전망',
  },
  {
    id: 3,
    text: '#한적한 시골',
  },
  {
    id: 4,
    text: '#키즈',
  },
  {
    id: 5,
    text: '#오지',
  },
  {
    id: 6,
    text: '#섬',
  },
  {
    id: 7,
    text: '#창작공간',
  },
  {
    id: 8,
    text: '#무장애',
  },
];
export const FooterCaureselTitle: ContetnType[] = [
  {
    id: 1,
    text: '인기',
  },
  {
    id: 2,
    text: '산맥',
  },
  {
    id: 3,
    text: '해변',
  },
  {
    id: 4,
    text: '특이한 숙소',
  },
  {
    id: 5,
    text: '예술 및 문화',
  },
  {
    id: 6,
    text: '즐길거리',
  },
];

export const FooterCarouselItemInfo = [
  {
    id: 1,
    img: spainImg,
    title: '스페인',
    recommend: '에어비앤비에서 가장 사랑받는 숙소',
    description: `베날마데나,\n스페인의 공동 주택 전체`,
    defaultPrice: '₩89,062',
    discountPrice: '₩67,135',
    day: '/박',
  },
  {
    id: 2,
    img: californiaImg,
    title: '캘리포니아',
    recommend: '에어비앤비에서 가장 사랑받는 숙소',
    description: '옥시덴탈(Occidental)\n캘리포니아, 미국의 트리하우스',
    defaultPrice: '₩139,950',
    discountPrice: '₩27,135',
    day: '/박',
  },
];

export const TestDummy = [
  {
    id: 1,
  },
  {
    id: 2,
  },
  {
    id: 3,
  },
  {
    id: 4,
  },
  {
    id: 5,
  },
  {
    id: 6,
  },
  {
    id: 7,
  },
  {
    id: 8,
  },
  {
    id: 9,
  },
  {
    id: 10,
  },
  {
    id: 11,
  },
  {
    id: 12,
  },
  {
    id: 13,
  },
  {
    id: 14,
  },
  {
    id: 15,
  },
  {
    id: 16,
  },
  {
    id: 17,
  },
  {
    id: 18,
  },
  {
    id: 19,
  },
  {
    id: 20,
  },
];
