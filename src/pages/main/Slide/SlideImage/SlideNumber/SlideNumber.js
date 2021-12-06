// import React, { useState, useEffect } from 'react';

import './SlideNumber.scss';

function SlideNumber({ userData, setSlideSize }) {
  // console.log(userData); ///마우스 휠 사용하면 계속 호출함;;;;;
  // console.log(slideSize);
  const userData2 = [...userData];

  if (userData2.length > 10) {
    userData2.splice(10, userData2.length);
  }

  return (
    <ul className="slideNumber">
      {userData2.map(data => {
        return (
          <li
            className="slideNumberIndex"
            key={data.id}
            onClick={() => {
              setSlideSize(data.id - 1);
            }}
          >
            {data.id}
          </li>
        );
      })}
    </ul>
  );
}

export default SlideNumber;
