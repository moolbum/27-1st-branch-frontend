import React, { useState, useEffect } from 'react';
import './SlideButton.scss';

function SlideButton() {
  return (
    <div className="SlideButton">
      <div className="leftButton">
        <img
          className="leftButtonIcon"
          src="./images/Main/iconmonstr-arrow-left-thin.svg"
          alt="button"
        />
      </div>
      <div className="rightButton">
        <img
          className="rightButtonIcon"
          src="./images/Main/iconmonstr-arrow-right-thin.svg"
          alt="button"
        />
      </div>
    </div>
  );
}

export default SlideButton;
