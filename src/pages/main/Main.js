import React, { useState, useEffect } from 'react';
import SlideImage from './Slide/Slide';
import KeyWord from './KeyWord/KeyWord';
import Writers from './Writers/Writers';
import Articles from './Articles/Articles';

import './Main.scss';

function Main() {
  return (
    <div className="main">
      <SlideImage className="componuntSlideImage" />
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
