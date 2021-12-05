import { useState } from 'react';
import SlideButton from '../SlideImage/SlideButton/SlideButton';
import SlideNumber from '../SlideImage/SlideNumber/SlideNumber';
import SlideList from '../SlideImage/SlideList/SlideList';
import './SlideImage.scss';

function SlideImage({ userData }) {
  const [slideSize, setSlideSize] = useState(0);

  const handlePrevBtn = () => {
    if (slideSize > 0) {
      setSlideSize(slideSize - 1);
    } else {
      setSlideSize(0);
    }
  };

  const handleNextBtn = () => {
    setSlideSize(slideSize + 1);
  };
  return (
    <>
      <div
        className="slideImage"
        style={!slideSize ? { paddingLeft: '20vw' } : null}
      >
        <SlideList slideSize={slideSize} userData={userData} />
        {slideSize && (
          <div className="rightButton" onClick={handlePrevBtn}>
            <SlideButton />
          </div>
        )}

        <div className="leftButton" onClick={handleNextBtn}>
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
