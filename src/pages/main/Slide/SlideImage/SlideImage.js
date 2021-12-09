import { useState } from 'react';
import SlideButton from '../SlideImage/SlideButton/SlideButton';
import SlideNumber from '../SlideImage/SlideNumber/SlideNumber';
import SlideList from '../SlideImage/SlideList/SlideList';
import './SlideImage.scss';

const SLIDE_MOVING_WIDTH = 320;
const SLIDE_LENGTH = 18;

function SlideImage({ userData }) {
  const [slideSize, setSlideSize] = useState(0);

  const prevSlide = () => {
    if (slideSize === 0) return;
    setSlideSize(slideSize - 3);
  };

  const nextBtnSlide = () => {
    if (slideSize >= SLIDE_LENGTH) return;
    setSlideSize(slideSize + 3);
  };

  return (
    <>
      <div className="slideImage">
        <SlideList
          slideSize={slideSize}
          userData={userData}
          slideMovingWidth={SLIDE_MOVING_WIDTH}
        />
        {slideSize && (
          <div className="rightButton" onClick={prevSlide}>
            <SlideButton />
          </div>
        )}
        {slideSize !== 18 && (
          <div className="leftButton" onClick={nextBtnSlide}>
            <SlideButton />
          </div>
        )}
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
