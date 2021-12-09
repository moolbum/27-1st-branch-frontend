import React, { useState } from 'react';
import SlideButton from '../Slide/SlideImage/SlideButton/SlideButton';
import './Articles.scss';

const SLIDE_MOVING_UNIT = 1200;
const SLID_LENGTH = 4;

function Articles({ ditailList }) {
  const newDitailList = [...ditailList];
  newDitailList.splice(21, ditailList.length);
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
    <div className="articles">
      <div
        className="container"
        style={{
          transform: `translateX(${-slidePosition * SLIDE_MOVING_UNIT}px)`,
        }}
      >
        {newDitailList.map((list, index) => {
          return (
            <div className="box" key={index}>
              <img className="userFeedImg" src={list.thumbnail} alt="NewFeed" />
              <span className="userFeedTitle">{list.title}</span>
              <span className="userFeedSub">{list.content}</span>
              <span className="userFeedName">by {list.user}</span>
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
