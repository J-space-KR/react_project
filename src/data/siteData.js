// 화면에 반복해서 보여 줄 데이터는 JSX 밖에 따로 모아 두면 읽기 쉽습니다.
// 나중에 API를 배우면 이 배열 대신 서버에서 받은 데이터를 사용할 수 있어요.

export const voyages = [
  {
    id: 1,
    region: "SKINCARE",
    title: "피어나는 세럼",
    route: "맑고 촉촉한 피부를 위한 첫 번째 단계",
    nights: "50 ml",
    date: "NEW",
    image: "/images/꽃_페이셜세럼.jpeg",
  },
  {
    id: 2,
    region: "SKINCARE",
    title: "꽃잎 장벽 크림",
    route: "편안하고 건강한 피부를 위한 보습 케어",
    nights: "50 ml",
    date: "BEST",
    image: "/images/꽃_실크페탈 리치크림.jpeg",
  },
  {
    id: 3,
    region: "CLEANSING",
    title: "플로럴 나이트 아이크림",
    route: "부드럽게 녹여내는 나이트 케어",
    nights: "80 ml",
    date: "NEW",
    image: "/images/꽃_아이크림.png",
  },
  {
    id: 4,
    region: "SKINCARE",
    title: "꽃의 진정 에센스",
    route: "민감해진 피부를 위한 편안한 수분 케어",
    nights: "120 ml",
    date: "KKOT",
    image: "/images/꽃_발효에센스.jpeg",
  },
];

export const suites = [
  {
    id: 1,
    name: "블루밍 컬렉션",
    description: "피어나는 꽃처럼, 맑고 촉촉한 피부를 위한 시그니처 스킨케어 라인입니다.",
    image: "/images/꽃_페탈 밀크에멜젼.png",
  },
  {
    id: 2,
    name: "그린 리추얼 컬렉션",
    description: "자연에서 온 순수한 성분으로 완성한 편안한 데일리 케어입니다.",
    image: "/images/꽃_영양크림.png",
  },
  {
    id: 3,
    name: "퓨어 클렌징 컬렉션",
    description: "부드럽게 녹여내는 클렌징으로 하루의 피부를 정돈합니다.",
    image: "/images/꽃_토너.jpeg",
  },
];

export const experiences = [
  {
    id: 1,
    title: "스킨케어 철학",
    description: "피어나는 순간이 아니라, 피어나는 과정 자체가 아름답다고 믿습니다.",
    image: "/images/꽃_전체 라인.jpeg",
  },
  {
    id: 2,
    title: "우리의 성분",
    description: "자연에서 온 순수한 성분으로 편안한 피부를 만듭니다.",
    image: "/images/자연에서.png",
  },
  {
    id: 3,
    title: "브랜드 이야기",
    description: "한국에서 시작해, 전 세계로 피어나는 뷰티 브랜드 KKOT입니다.",
    image: "/images/꽃_발효에센스.jpeg",
  },
];
