# Four Seasons Yachts - React 수업용 클론

이 프로젝트는 React를 짧게 배운 뒤에도 어떤 웹사이트를 만들 수 있는지 확인하기 위한 예제입니다.
Four Seasons Yachts 공식 사이트 전체를 복제하지 않고, 대표적인 화면과 분위기만 수업용으로 단순화했습니다.

> 비상업적 교육용 프로젝트이며 Four Seasons와 관련된 공식 사이트가 아닙니다.

## 실행 방법

```bash
npm install
npm run dev
```

터미널에 표시되는 `http://localhost:5173` 주소를 브라우저에서 열어 주세요.

## 만들어 둔 페이지

| 주소 | 화면 | 확인할 React 문법 |
| --- | --- | --- |
| `/` | 메인 | 컴포넌트 조립, `map`, `slice` |
| `/yacht` | 요트 소개 | props, 반복 렌더링 |
| `/suites` | 객실 소개 | `map`, `index` |
| `/voyages` | 항해 검색 | `useState`, `filter` |
| `/inquire` | 문의 | 입력값 상태, 이벤트, 조건부 렌더링 |

## 폴더는 왜 이렇게 나눴나요?

```text
src
├── components   여러 페이지에서 다시 사용하는 작은 UI
├── data         화면에 반복해서 출력할 배열 데이터
├── pages        주소마다 보여 주는 페이지 컴포넌트
├── styles       사이트 전체에 적용하는 CSS
├── App.jsx      주소와 페이지를 연결하는 곳
└── main.jsx     React 앱을 처음 실행하는 곳
```

- `components`: Header처럼 여러 페이지에서 사용할 코드를 둡니다.
- `pages`: HomePage처럼 하나의 완성된 화면을 둡니다.
- `data`: 나중에 API로 바뀔 수 있는 배열을 둡니다.
- 각 컴포넌트 옆의 `module.css`: 그 컴포넌트에만 적용할 CSS입니다.

처음에는 `src/main.jsx` → `src/App.jsx` → `src/pages/HomePage/HomePage.jsx` 순서로 읽어 보세요.

## 수업에서 보기 좋은 순서

1. `App.jsx`에서 `Route`가 주소와 페이지를 연결하는 모습 보기
2. `Header.jsx`에서 배열을 `map`으로 메뉴로 만드는 모습 보기
3. `HomePage.jsx`에서 작은 컴포넌트가 한 페이지로 합쳐지는 모습 보기
4. `VoyagesPage.jsx`에서 버튼을 누르면 상태와 목록이 바뀌는 모습 보기
5. `InquirePage.jsx`에서 입력값을 상태로 저장하는 모습 보기

## 이미지 안내

화면 이해를 위해 Four Seasons Yachts 공식 공개 이미지 일부를 로컬에 저장했습니다.
강의와 학습 목적 외의 재배포 또는 상업적 사용은 피해주세요.

## 메인 동영상은 왜 프로젝트 안에 없나요?

메인 화면의 동영상은 `Hero.jsx`에서 외부 영상 주소를 바로 사용합니다.
그래서 큰 동영상 파일을 전부 내려받지 않아도 되고, 프로젝트 용량도 작게 유지할 수 있습니다.

```jsx
<video autoPlay loop muted playsInline poster="/images/positano-sunset.webp">
  <source src={HERO_VIDEO_URL} type="video/mp4" />
</video>
```

- `autoPlay`: 페이지가 열리면 자동으로 재생합니다.
- `loop`: 영상이 끝나면 처음부터 다시 재생합니다.
- `muted`: 소리를 끕니다. 자동 재생을 위해 필요합니다.
- `playsInline`: 모바일에서도 전체 화면으로 바뀌지 않고 그 자리에서 재생합니다.
- `poster`: 영상이 늦게 열리거나 실패할 때 보여 줄 이미지입니다.

외부 링크는 연습할 때 편하지만, 주소가 바뀌거나 외부 재생이 막히면 영상이 나오지 않을 수 있습니다.
중요한 발표나 실제 서비스에서는 영상 한 개만 `public/videos/hero.mp4`로 저장한 뒤
주소를 `/videos/hero.mp4`로 바꾸는 방법이 더 안전합니다. 이미지와 영상을 전부 내려받을 필요는 없습니다.

## 폰트도 외부 주소를 사용하나요?

네. 공식 사이트와 비슷한 글자 모양을 확인할 수 있도록 아래 폰트를 외부 주소로 불러옵니다.

- 큰 영문 제목: `Saol Display`
- 메뉴와 작은 글자: `Helvetica Neue`
- 일부 본문 세리프: `Garamond MT Pro`

`index.html`에는 Fonts.net 스타일시트가 있고, `src/styles/global.css`에는 공식 사이트의
폰트 파일 주소와 수업에서 사용할 CSS 변수(`--font-display`, `--font-serif`, `--font-sans`)가 있습니다.

```css
.title {
  font-family: var(--font-display);
}
```

폰트도 동영상과 마찬가지로 파일을 내려받지 않아도 되어 편하지만, 외부 사이트의 주소나 정책이
바뀌면 나오지 않을 수 있습니다. 이 프로젝트는 학습용이므로 CDN을 사용하고, 실제 서비스에서는
사용 권한을 확인한 폰트 파일을 프로젝트나 별도의 CDN에서 직접 관리하는 편이 안전합니다.
