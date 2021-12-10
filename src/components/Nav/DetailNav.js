import { useState } from 'react';
import { Link } from 'react-router-dom';
import Hamburger from './Hamburger';
import ScrollIndicator from './ScrollIndicator/Indicator';
import './DetailNav.scss';

function DetailNav({ setIsCommentOpen }) {
  const [hamburgerToggle, setHamburgerToggle] = useState(false);

  const openHamburger = () => {
    setHamburgerToggle(!hamburgerToggle);
  };

  const goToComment = () => {
    window.location.href = '#section2';
    setIsCommentOpen(true);
  };

  return (
    <>
      <section className="detailNav">
        <div className="navLeft">
          <img
            onClick={openHamburger}
            className="hamburgerButton"
            src="/images/Nav/iconmonstr-menu-thin.svg"
            alt="더보기"
          />
          <Link to="/" className="logo">
            Branch
          </Link>
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
        <Hamburger
          openHamburger={openHamburger}
          hamburgerToggle={hamburgerToggle}
        />
      </section>
      <ScrollIndicator />
    </>
  );
}

export default DetailNav;
