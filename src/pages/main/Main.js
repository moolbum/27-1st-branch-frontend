import React, { useState, useEffect } from 'react';
import Slide from './Slide/Slide';
import KeyWord from './KeyWord/KeyWord';
import Writers from './Writers/Writers';
import Articles from './Articles/Articles';

import './Main.scss';

function Main() {
  const [userData, setUserData] = useState([]);
  // console.log(userData);

  useEffect(() => {
    fetch('/data/detailData.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(res => setUserData(res));
  }, []);

  return (
    <div className="main">
      <Slide className="componuntSlideImage" userData={userData} />
      <KeyWord className="componuntKeyWord" />
      <Writers className="componuntWriters" />
      <Articles className="componuntArticles" />
      <span className="topButton">
        <span className="topButtonText">
          Top
          <img
            className="TopButtonImg"
            src="./images/Main/iconmonstr-arrow-right-thin.svg"
            alt="TopButton"
          />
        </span>
      </span>
    </div>
  );
}

export default Main;
