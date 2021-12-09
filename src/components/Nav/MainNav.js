import { useState } from 'react';
import { Link } from 'react-router-dom';
import Hamburger from './Hamburger';
import MainButton from './Button/MainButton';
import './MainNav.scss';

function MainNav() {
  const [hamburgerToggle, setHamburgerToggle] = useState(false);

  const openHamburger = () => {
    setHamburgerToggle(!hamburgerToggle);
  };

  return (
    <section className="nav">
      <div className="navLeft">
        <img
          onClick={openHamburger}
          className="hamburgerButton"
          src="/images/Nav/iconmonstr-menu-thin.svg"
          alt="더보기"
        />
        <Link to="/">
          <span className="logo">Branch</span>
        </Link>
      </div>
      <MainButton />
      <Hamburger
        openHamburger={openHamburger}
        hamburgerToggle={hamburgerToggle}
      />
    </section>
  );
}

export default MainNav;
