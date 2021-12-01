// import React, { useState } from 'react';
import SlideButton from '../SlideButton/SlideButton';

import './SlideImage.scss';

function SlideImage({ userData }) {
  // console.log({ userData });

  return (
    <div className="slideImage">
      {userData.map(list => {
        return (
          <span className="bestBranchContainer" key={list.id}>
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

      <SlideButton />
      <SlideButton />
    </div>
  );
}

export default SlideImage;
