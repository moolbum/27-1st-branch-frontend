import { useState } from 'react';
import Hamburger from './Hamburger';
import './Nav.scss';

function Nav() {
  const [hamburgerToggle, setHamburgerToggle] = useState(false);
  // console.log(hamburgerToggle);
  const openHamburger = () => {
    setHamburgerToggle(hamburgerToggle === false ? true : false);
  };
  // console.log(hamburgerToggle);
  return (
    <>
      <section className="nav">
        <div className="navLeft">
          <img
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
            onClick={openHamburger}
            src="/images/Nav/iconmonstr-search-thin.svg"
            alt="검색"
          />
        </div>
      </section>
      <Hamburger toggleValue={hamburgerToggle} />
    </>
  );
}

export default Nav;
