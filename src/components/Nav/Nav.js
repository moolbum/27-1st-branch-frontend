import Hamburger from './Hamburger';
import './Nav.scss';

function Nav() {
  const openHamburger = () => {};

  return (
    <>
      <section className="nav">
        <div className="navLeft">
          <img
            onClick={openHamburger}
            className="hamburgerButton"
            src="/images/Nav/iconmonstr-menu-thin.svg"
            alt="더보기"
          />
          <span className="logo">Branch</span>
        </div>
        <div className="navRight">
          <span className="startButton">시작하기</span>
          <img
            className="searchIcon"
            src="/images/Nav/iconmonstr-search-thin.svg"
            alt="검색"
          />
        </div>
      </section>
      <div className="HamburgerMenu">
        <Hamburger />
      </div>
    </>
  );
}

export default Nav;
