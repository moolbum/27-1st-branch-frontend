import React, { useState } from 'react';
import SlideButton from '../SlideButton/SlideButton';
import './Articles.scss';

function Articles({ userData }) {
  const [slidePosition, setSlidePosition] = useState(0);

  const boxSize = 240; // box 컴포넌트 사이즈
  const moveWight = 1000; //슬라이드 버튼 클릭 시 이동거리
  const articleDataLength = boxSize * userData.length; // data 총 길이
  const hiddenedarticle = articleDataLength - window.innerWidth;

  const PrevBtn = () => {
    if (Math.abs(slidePosition) < moveWight) {
      setSlidePosition(0);
    } else {
      setSlidePosition(slidePosition + moveWight);
    }
  };

  const NextBtn = () => {
    if (hiddenedarticle - Math.abs(slidePosition) < moveWight) {
      setSlidePosition(
        slidePosition - (hiddenedarticle - Math.abs(slidePosition))
      );
    } else {
      setSlidePosition(slidePosition - moveWight);
    }
  };

  return (
    <div
      className="articles"
      style={!slidePosition ? { paddingLeft: '20vw' } : null}
    >
      <div
        className="articlesContainer"
        style={{ transform: `translateX(${slidePosition}px)` }}
      >
        {userData.map(list => {
          return (
            <div className="articlesbox" key={list.id}>
              <img
                className="articlesUserFeedImg"
                src={list.images}
                alt="NewFeed"
              />
              <span className="articlesUserFeedTitle">{list.title}</span>
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
      </div>
      <div className="articlesButtonRight" onClick={NextBtn}>
        <SlideButton />
      </div>
      <div
        className="articlesButtonleft"
        style={!slidePosition ? { display: 'none' } : null}
        onClick={PrevBtn}
      >
        <SlideButton />
      </div>
    </div>
  );
}

export default Articles;
