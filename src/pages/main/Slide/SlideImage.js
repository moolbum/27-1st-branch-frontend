import React, { useState, useEffect } from 'react';
import SlideButton from '../SlideButton/SlideButton';

import './SlideImage.scss';

function SlideImage() {
  return (
    <div className="slideImage">
      <section className="bestBranchContainer0">
        <div className="bestBranchContainer1">
          <div className="BranchMeta">
            <div className="BranchImageBox">
              <img
                className="BranchCover"
                src="/images/Main/microsoft-edge-FAaz8lkinzs-unsplash.jpg"
                alt="BranchImage"
              />
            </div>
            <div className="bestBranchText">
              <span className="bestBranchTitle">
                큰 닭, 작은 닭 무엇이 맛있을까?
              </span>
              <span className="bestBranchName">by 던컨</span>
            </div>
          </div>
          <div className="BranchMetaContainer">
            <div className="BranchMeta2">
              <div className="BranchImageBox2">
                <img
                  className="BranchCover2"
                  src="/images/Main/microsoft-edge-FAaz8lkinzs-unsplash.jpg"
                  alt="BranchImage"
                />
              </div>
              <div className="bestBranchText2">
                <span className="bestBranchTitle">빈정 상했던 국밥집</span>
                <span className="bestBranchName">by 던컨</span>
              </div>
            </div>
            <div className="BranchMeta2">
              <div className="BranchImageBox2">
                <img
                  className="BranchCover2"
                  src="/images/Main/microsoft-edge-FAaz8lkinzs-unsplash.jpg"
                  alt="BranchImage"
                />
              </div>
              <div className="bestBranchText2">
                <span className="bestBranchTitle">빈정 상했던 국밥집</span>
                <span className="bestBranchName">by 던컨</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bestBranchContainer0">
        <div className="BranchMeta3">
          <div className="BranchImageBox3">
            <img
              className="BranchCover3"
              src="/images/Main/microsoft-edge-FAaz8lkinzs-unsplash.jpg"
              alt="BranchImage"
            />
          </div>
          <div className="bestBranchText3">
            <span className="bestBranchTitle">빈정 상했던 국밥집</span>
            <span className="bestBranchName">by 던컨</span>
          </div>
        </div>
        <div className="BranchMeta3">
          <div className="BranchImageBox3">
            <img
              className="BranchCover3"
              src="/images/Main/microsoft-edge-FAaz8lkinzs-unsplash.jpg"
              alt="BranchImage"
            />
          </div>
          <div className="bestBranchText3">
            <span className="bestBranchTitle">빈정 상했던 국밥집</span>
            <span className="bestBranchName">by 던컨</span>
          </div>
        </div>
        <div className="BranchMeta3">
          <div className="BranchImageBox3">
            <img
              className="BranchCover3"
              src="/images/Main/microsoft-edge-FAaz8lkinzs-unsplash.jpg"
              alt="BranchImage"
            />
          </div>
          <div className="bestBranchText3">
            <span className="bestBranchTitle">빈정 상했던 국밥집</span>
            <span className="bestBranchName">by 던컨</span>
          </div>
        </div>
      </section>
      <SlideButton className="SlideButton" />
    </div>
  );
}

export default SlideImage;
