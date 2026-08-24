import { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import styles from "./Header.module.css";

// 공식 사이트의 메뉴 이름을 사용하되, 수업용 프로젝트에 이미 있는 페이지로 연결합니다.
const menus = [
  { path: "/voyages", label: "제품" },
  { path: "/suites", label: "컬렉션" },
  { path: "/yacht", label: "브랜드 이야기" },
  { path: "/yacht", label: "성분" },
  { path: "/inquire", label: "문의" },
];

function Header() {
  // 메뉴 버튼을 누를 때 true와 false가 바뀌는 간단한 상태입니다.
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  // 문의 페이지는 헤더 뒤에 큰 사진이 없어서, 배경색을 살짝 다르게 줍니다.
  const isSolidHeader = location.pathname === "/inquire";

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <header
        className={`${styles.header} ${isSolidHeader ? styles.solid : ""}`}
      >
        <Link className={styles.logo} to="/" onClick={closeMenu}>
          <img src="/images/logo.png" alt="꽃 KKOT" />
        </Link>
      </header>

      <div className={`${styles.menuOverlay} ${isMenuOpen ? styles.open : ""}`}>
        <button
          className={styles.closeButton}
          type="button"
          onClick={closeMenu}
          aria-label="메뉴 닫기"
        >
          <span></span>
          <span></span>
        </button>

        <div className={styles.topActions}>
          <Link to="/inquire" onClick={closeMenu}>
            문의하기
          </Link>
          <Link className={styles.filledAction} to="/voyages" onClick={closeMenu}>
            제품 보기
          </Link>
        </div>

        <div className={styles.menuContent}>
          <nav className={styles.nav} aria-label="주요 메뉴">
            {menus.map((menu, index) => (
              <div className={styles.navRow} key={`${menu.label}-${index}`}>
                <span className={styles.step}></span>
                <NavLink
                  className={({ isActive }) =>
                    isActive && index < 4 ? styles.active : ""
                  }
                  to={menu.path}
                  onClick={closeMenu}
                >
                  {menu.label}
                </NavLink>
              </div>
            ))}
          </nav>

          <div className={styles.featured}>
            <Link to="/voyages" onClick={closeMenu}>
              <img src="/images/꽃_페이셜세럼.jpeg" alt="피어나는 세럼" />
              <span>NEW ARRIVALS</span>
              <strong>피어나는 세럼</strong>
            </Link>

            <Link to="/suites" onClick={closeMenu}>
              <img src="/images/꽃_실크페탈 리치크림.jpeg" alt="꽃잎 장벽 크림" />
              <span>BEST SELLERS</span>
              <strong>꽃잎 장벽 크림</strong>
            </Link>
          </div>
        </div>

        <div className={styles.menuFooter}>
          <div>
            <Link to="/inquire" onClick={closeMenu}>
              문의하기
            </Link>
            <a href="tel:+18005550100">1-800-555-0100</a>
          </div>
          <span>꽃 KKOT</span>
        </div>
      </div>

      <div className={`${styles.floatingMenu} ${isMenuOpen ? styles.hidden : ""}`}>
        <button
          className={styles.menuButton}
          type="button"
          onClick={() => setIsMenuOpen(true)}
          aria-label="메뉴 열기"
        >
          <svg viewBox="0 0 11 10" aria-hidden="true">
            <line x1="0" x2="11" y1="1" y2="1"></line>
            <line x1="0" x2="11" y1="5" y2="5"></line>
            <line x1="0" x2="11" y1="9" y2="9"></line>
          </svg>
          <span>메뉴</span>
        </button>

        <Link className={styles.voyageButton} to="/voyages">
          <svg viewBox="0 0 20 20" aria-hidden="true">
            <circle cx="8.5" cy="8.5" r="5.5"></circle>
            <line x1="12.5" y1="12.5" x2="18" y2="18"></line>
          </svg>
          <span>제품 보기</span>
        </Link>
      </div>
    </>
  );
}

export default Header;
