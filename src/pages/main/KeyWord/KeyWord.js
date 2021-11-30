import React, { useState, useEffect } from 'react';

import './KeyWord.scss';

function KeyWord() {
  return (
    <span className="keyWord">
      <span className="keyWordTitle">BRANCH KEYWORD</span>
      <span className="keyWordSubText">키워드로 분류된 다양한 글 모음</span>
      <section className="keyWordContainer">
        <div className="keyWordContainerLine1">
          <div className="keyWordContents">js</div>
          <div className="keyWordContents">js</div>
          <div className="keyWordContents">js</div>
        </div>
        <div className="keyWordContainerLine2">
          <div className="keyWordContents">js</div>
          <div className="keyWordContents">js</div>
          <div className="keyWordContents">js</div>
        </div>
      </section>
    </span>
  );
}

export default KeyWord;
