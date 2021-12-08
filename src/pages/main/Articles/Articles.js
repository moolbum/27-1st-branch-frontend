import React, { useState } from 'react';
import SlideButton from '../Slide/SlideImage/SlideButton/SlideButton';
import './Articles.scss';

const SLIDE_MOVING_UNIT = 1200;
const SLID_LENGTH = 4;

function Articles({ userData }) {
  const [slidePosition, setSlidePosition] = useState(0);

  const prevBtn = () => {
    if (slidePosition === 0) return;
    setSlidePosition(slidePosition - 1);
  };

  const nextBtn = () => {
    if (slidePosition >= SLID_LENGTH) return;
    setSlidePosition(slidePosition + 1);
  };

  return (
    <div
      className="articles"
      // style={!slidePosition ? { paddingLeft: '20vw' } : null}
    >
      <div
        className="container"
        style={{
          transform: `translateX(${-slidePosition * SLIDE_MOVING_UNIT}px)`,
        }}
      >
        {userData.map(list => {
          return (
            <div className="box" key={list.id}>
              <img className="userFeedImg" src={list.images} alt="NewFeed" />
              <span className="userFeedTitle">{list.title}</span>
              <span className="userFeedSub">
                맥시멀 리스트 남편이 또 뭔가를 샀다. 사촌 집에서 본 크롬캐스트를
                사서 HBO로 요즘 핫하다는 듄을 봤다. 아주 먼 미래의 이야기라
                주인공이 걸어 다니면 조명이 따라다닌다. 티모시가 나오는데도
                불구하고 나는 중간에 박차고 나왔다. 아이맥스로 봐야 재밌다는 걸
                집에서 봐서 그런 걸까?
              </span>
              <span className="userFeedName">by {list.userName}</span>
            </div>
          );
        })}
      </div>
      {slidePosition !== 4 && (
        <div className="buttonRight" onClick={nextBtn}>
          <SlideButton />
        </div>
      )}
      <div
        className="buttonleft"
        style={!slidePosition ? { display: 'none' } : null}
        onClick={prevBtn}
      >
        <SlideButton />
      </div>
    </div>
  );
}

export default Articles;
