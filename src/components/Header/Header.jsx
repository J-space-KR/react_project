import { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import styles from "./Header.module.css";

// 공식 사이트의 메뉴 이름을 사용하되, 수업용 프로젝트에 이미 있는 페이지로 연결합니다.
const menus = [
  { path: "/", label: "Home" },
  { path: "/yacht", label: "Our Yachts" },
  { path: "/voyages", label: "Regions" },
  { path: "/suites", label: "Suites" },
  { path: "/yacht", label: "Life Onboard" },
  { path: "/yacht", label: "Experiences" },
];

function Header() {
  // 메뉴 버튼을 누를 때 true와 false가 바뀌는 간단한 상태입니다.
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  // 밝은 배경의 문의 페이지에서는 로고가 잘 보이도록 검은 배경을 넣습니다.
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
          <img src="/images/four-seasons-logo.svg" alt="Four Seasons Yachts" />
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
            INQUIRE NOW
          </Link>
          <Link className={styles.filledAction} to="/voyages" onClick={closeMenu}>
            FIND MY VOYAGE
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
              <img src="/images/riviera.webp" alt="The Rivieras voyage" />
              <span>FEATURED VOYAGE</span>
              <strong>The Rivieras</strong>
            </Link>

            <Link to="/suites" onClick={closeMenu}>
              <img src="/images/suite-living.jpg" alt="Four Seasons suite" />
              <span>OUR SUITES</span>
              <strong>Welcome Home</strong>
            </Link>
          </div>
        </div>

        <div className={styles.menuFooter}>
          <div>
            <Link to="/inquire" onClick={closeMenu}>
              CONTACT US
            </Link>
            <a href="tel:+18007057580">1-800-705-7580</a>
          </div>
          <span>FOUR SEASONS YACHTS</span>
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
          <span>MENU</span>
        </button>

        <Link className={styles.voyageButton} to="/voyages">
          <svg viewBox="0 0 20 20" aria-hidden="true">
            <circle cx="8.5" cy="8.5" r="5.5"></circle>
            <line x1="12.5" y1="12.5" x2="18" y2="18"></line>
          </svg>
          <span>FIND MY VOYAGE</span>
        </Link>
      </div>
    </>
  );
}

export default Header;
