import { useState } from 'react';
import SlideButton from '../SlideImage/SlideButton/SlideButton';
import SlideNumber from '../SlideImage/SlideNumber/SlideNumber';
import SlideList from '../SlideImage/SlideList/SlideList';
import './SlideImage.scss';

const SLIDE_MOVING_WIDTH = 320; //슬라이드 버튼 클릭 시 움직일 길이 1000px
const SLIDE_LENGTH = 18; //슬라이드 길이

function SlideImage({ userData }) {
  const [slideSize, setSlideSize] = useState(0);
  // console.log(slideSize);

  const prevSlide = () => {
    if (slideSize === 0) {
      return; // 클릭시 작동 x
    } else {
      setSlideSize(slideSize - 3);
    }
  };

  const nextBtnSlide = () => {
    if (slideSize >= SLIDE_LENGTH) {
      return; // 클릭시 작동 x
    } else {
      setSlideSize(slideSize + 3);
    }
  };

  return (
    <>
      <div className="slideImage">
        <SlideList
          slideSize={slideSize}
          userData={userData}
          SLIDE_MOVING_WIDTH={SLIDE_MOVING_WIDTH}
        />
        {slideSize && (
          <div className="rightButton" onClick={prevSlide}>
            <SlideButton />
          </div>
        )}
        <div className="leftButton" onClick={nextBtnSlide}>
          <SlideButton />
        </div>
      </div>
      <SlideNumber
        userData={userData}
        setSlideSize={setSlideSize}
        slideSize={slideSize}
      />
    </>
  );
}

export default SlideImage;
