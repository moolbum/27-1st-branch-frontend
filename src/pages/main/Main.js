import React, { useState, useEffect } from 'react';
import Slide from './Slide/Slide';
import KeyWord from './KeyWord/KeyWord';
import Writers from './Writers/Writers';
import Articles from './Articles/Articles';
import './Main.scss';

function Main() {
  const [userData, setUserData] = useState([]);
  const [ScrollY, setScrollY] = useState(0);
  // console.log(ScrollY);
  // 스크롤 높이값 구하는 함수 => pageYOffset 속성이 작업해준다
  const handleFollow = () => {
    setScrollY(window.scrollY);
  };

  // 클릭하면 스크롤이 위로 올라가는 함수
  const handleTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
    setScrollY(0); // ScrollY 의 값을 초기화
  };

  useEffect(() => {
    const watch = () => {
      window.addEventListener('scroll', handleFollow);
    };
    watch();
    return () => {
      window.removeEventListener('scroll', handleFollow);
    };
  });

  useEffect(() => {
    fetch('/data/detailData.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(res => setUserData(res));
  }, []);

  return (
    <div className="main">
      <Slide userData={userData} />
      <KeyWord />
      <Writers userData={userData} />
      <Articles userData={userData} />
      <span
        className="topButton"
        onClick={handleTop}
        style={ScrollY < 260 ? { display: 'none' } : null}
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
    </div>
  );
}

export default Main;
