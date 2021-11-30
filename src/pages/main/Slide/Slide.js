import React, { useState, useEffect } from 'react';
import Title from './Title';
import SlideImage from './SlideImage';
import SlideNumber from './SlideNumber';

import './Slide.scss';

function Slide() {
  return (
    <div className="Slide">
      <Title className="Title" />
      <SlideImage className="SlideImage" />
      <SlideNumber className="SlideNumber" />
    </div>
  );
}

export default Slide;
