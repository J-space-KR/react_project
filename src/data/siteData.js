// 화면에 반복해서 보여 줄 데이터는 JSX 밖에 따로 모아 두면 읽기 쉽습니다.
// 나중에 API를 배우면 이 배열 대신 서버에서 받은 데이터를 사용할 수 있어요.

export const voyages = [
  {
    id: 1,
    region: "Mediterranean",
    title: "The Rivieras",
    route: "Monte Carlo → Barcelona",
    nights: "7 nights",
    date: "May 2027",
    image: "/images/riviera.webp",
  },
  {
    id: 2,
    region: "Mediterranean",
    title: "Greek Island Days",
    route: "Athens → Mykonos",
    nights: "5 nights",
    date: "June 2027",
    image: "/images/positano-sunset.webp",
  },
  {
    id: 3,
    region: "Caribbean",
    title: "Island Life",
    route: "Miami → Exumas",
    nights: "6 nights",
    date: "January 2028",
    image: "/images/exumas.webp",
  },
  {
    id: 4,
    region: "Caribbean",
    title: "Warm Winter Escape",
    route: "St. Barths → Antigua",
    nights: "8 nights",
    date: "February 2028",
    image: "/images/yacht-hero.webp",
  },
];

export const suites = [
  {
    id: 1,
    name: "Seaview Suite",
    description: "커다란 창과 개인 테라스에서 바다를 가까이 만나는 객실입니다.",
    image: "/images/suite-balcony.jpg",
  },
  {
    id: 2,
    name: "Grand Ocean Suite",
    description: "거실과 침실이 나뉜 넓고 편안한 시그니처 스위트입니다.",
    image: "/images/suite-living.jpg",
  },
  {
    id: 3,
    name: "Portofino Suite",
    description: "긴 테라스에서 식사와 휴식을 함께 즐길 수 있습니다.",
    image: "/images/suite-terrace.jpg",
  },
];

export const experiences = [
  {
    id: 1,
    title: "Dining",
    description: "여행지의 맛과 계절을 담은 다이닝",
    image: "/images/dining.png",
  },
  {
    id: 2,
    title: "Wellness",
    description: "바다 위에서 누리는 조용한 휴식",
    image: "/images/wellness.webp",
  },
  {
    id: 3,
    title: "Exploration",
    description: "새로운 섬과 도시를 만나는 하루",
    image: "/images/exumas.webp",
  },
];
