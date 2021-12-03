import { useState } from 'react';
import SlideButton from '../SlideButton/SlideButton';
import SlideNumber from './SlideNumber';
import './SlideImage.scss';

function SlideImage({ userData }) {
  const [slideSize, setSlideSize] = useState(0);

  const SLIDE_MOVING_UNIT = 1000; //슬라이드 버튼 클릭 시 움직일 길이 1000px

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
        {userData.map(list => {
          return (
            <span
              className="bestBranchContainer"
              key={list.id}
              style={{
                transform: `translateX(${-slideSize * SLIDE_MOVING_UNIT}px)`,
              }}
            >
              <section className="bestBranchSection">
                <div className="branchImageBox">
                  <img
                    className="branchCover"
                    src={list.images}
                    alt="BranchImage"
                  />
                  <div className="branchCoverDim" />
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
          className={`rightButton${slideSize ? '' : ' hidden'}`}
          onClick={handlePrevBtn}
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
