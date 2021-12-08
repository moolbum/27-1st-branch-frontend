import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
import Hamburger from './Hamburger';
import HamburgerLogin from './HamburgerLogin';
import ScrollIndicator from '../ScrollIndicator/Indicator';
import './Nav.scss';

function Nav({ setIsCommentOpen }) {
  // const navigate = useNavigate();
  const [hamburgerToggle, setHamburgerToggle] = useState(false);
  const loginToken = localStorage.getItem('TOKEN');

  const openHamburger = () => {
    setHamburgerToggle(!hamburgerToggle);
  };

  const goToComment = () => {
    window.location.href = '#section2';
    setIsCommentOpen(true);
  };

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
          <img
            className="favorite"
            src="/images/Nav/favorite.png"
            alt="좋아요"
          />
          <img
            className="comment"
            src="/images/Nav/comment.png"
            alt="댓글"
            onClick={goToComment}
          />
          <img
            className="searchIcon"
            src="/images/Nav/iconmonstr-search-thin.svg"
            alt="검색"
          />
        </div>
        {!loginToken ? (
          <Hamburger
            openHamburger={openHamburger}
            hamburgerToggle={hamburgerToggle}
          />
        ) : (
          <HamburgerLogin
            openHamburger={openHamburger}
            hamburgerToggle={hamburgerToggle}
          />
        )}
      </section>
      <ScrollIndicator />
    </>
  );
}

export default Nav;
