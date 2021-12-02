// import React, { useState, useEffect } from 'react';
import SlideButton from '../SlideButton/SlideButton';
import './Articles.scss';

function Articles({ userData }) {
  return (
    <div className="articles">
      <div className="articlesContainer">
        {userData.map(list => {
          return (
            <div className="articlesbox" key={list.id}>
              <img
                className="articlesUserFeedImg"
                src={list.images}
                alt="NewFeed"
              />
              <span className="articlesUserFeedTitle">
                스타벅스에서 톨사이즈 주문하다 까여본적 있나요?
              </span>
              <span className="articlesUserFeedSub">
                맥시멀 리스트 남편이 또 뭔가를 샀다. 사촌 집에서 본 크롬캐스트를
                사서 HBO로 요즘 핫하다는 듄을 봤다. 아주 먼 미래의 이야기라
                주인공이 걸어 다니면 조명이 따라다닌다. 티모시가 나오는데도
                불구하고 나는 중간에 박차고 나왔다. 아이맥스로 봐야 재밌다는 걸
                집에서 봐서 그런 걸까?
              </span>
              <span className="articlesUserFeedName">by {list.userName}</span>
            </div>
          );
        })}
        <SlideButton />
      </div>
    </div>
  );
}

export default Articles;
