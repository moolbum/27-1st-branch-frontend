import { useState } from 'react';
import SlideButton from '../SlideButton/SlideButton';
import SlideNumber from './SlideNumber';

import './SlideImage.scss';

function SlideImage({ userData }) {
  const [slideSize, setSlideSize] = useState(0);
  const imgQuantity = userData.length;
  // console.log(Math.abs(slideSize));
  // console.log(userData.length);
  // console.log(userData);
  const SLIDE_MOVING_UNIT = 1000; //슬라이드 버튼 클릭 시 움직일 길이 1000px
  const IMG_WIDTH = 320; //이미지 가로 길이 320px
  const slideWidth = IMG_WIDTH * imgQuantity; //이미지 길이 * 이미지 갯수
  const hiddenedSlideWidth = slideWidth - window.innerWidth;

  const handlePrevBtn = () => {
    if (Math.abs(slideSize) < SLIDE_MOVING_UNIT) {
      setSlideSize(0);
    } else {
      setSlideSize(slideSize + SLIDE_MOVING_UNIT);
    }
  };

  const handleNextBtn = () => {
    if (hiddenedSlideWidth - Math.abs(slideSize) < SLIDE_MOVING_UNIT) {
      //남아있는 슬라이드의 길이에서 현재 슬라이드의 위치값을 뺀 값이 한 번에 움직여야 하는 값보다 작으면
      setSlideSize(slideSize - (hiddenedSlideWidth - Math.abs(slideSize))); //남은 길이만큼만 이동하고
    } else {
      //남아있는 슬라이드의 길이가 한 번에 움직여야 하는 값보다 크면
      setSlideSize(slideSize - SLIDE_MOVING_UNIT); //한 번에 움직여야 하는 만큼 값을 빼준다
    }
  };

  return (
    <>
      <div
        className="slideImage"
        style={!slideSize ? { paddingLeft: '20vw' } : null}
      >
        {userData.map(list => {
          return (
            <span
              className="bestBranchContainer"
              key={list.id}
              style={{ transform: `translateX(${slideSize}px)` }}
            >
              <section className="bestBranchSection">
                <div className="BranchImageBox">
                  <img
                    className="BranchCover"
                    src={list.images}
                    alt="BranchImage"
                  />
                  <div className="BranchCoverDim" />
                </div>
                <div className="bestBranchText">
                  <span className="bestBranchTitle">{list.title}</span>
                  <span className="bestBranchName">by {list.userName}</span>
                </div>
              </section>
            </span>
          );
        })}
        <div
          className="rightButton"
          onClick={handlePrevBtn}
          style={!slideSize ? { display: 'none' } : null}
        >
          <SlideButton />
        </div>
        <div className="leftButton" onClick={handleNextBtn}>
          <SlideButton />
        </div>
      </div>
      <SlideNumber />
    </>
  );
}

export default SlideImage;
