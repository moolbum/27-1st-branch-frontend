import React, { useState, useEffect } from 'react';

function Scroll({ handleTop }) {
  const [scroll, setScroll] = useState(0);
  const handleFollow = () => {
    setScroll(window.pageYOffset);
  };

  useEffect(() => {
    const watch = () => {
      window.addEventListener('scroll', handleFollow);
    };
    watch(); // addEventListener 함수를 실행
    return () => {
      window.removeEventListener('scroll', handleFollow); // addEventListener 함수를 삭제
    };
  });
  return (
    <span
      className="topButton"
      onClick={handleTop}
      style={window.scrollY < 260 ? { display: 'none' } : null}
    >
      <span className="topButtonText">
        Top
        <img
          className="topButtonImg"
          src="./images/Main/iconmonstr-arrow-right-thin.svg"
          alt="TopButton"
        />
      </span>
    </span>
  );
}

export default Scroll;
