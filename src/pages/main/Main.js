import React, { useState, useEffect } from 'react';
import Slide from './Slide/Slide';
import KeyWord from './KeyWord/KeyWord';
import Writers from './Writers/Writers';
import Articles from './Articles/Articles';
import Scroll from './Scroll';

// import NavBanner from '../Nav/NavBanner';
// import Nav from '../Nav/Nav';

import './Main.scss';

function Main() {
  const [userData, setUserData] = useState([]);
  const [tagData, setTagData] = useState([]);
  const [writerData, setWriterData] = useState([]);
  const [choiceTag, setChoiceTag] = useState(0);
  // console.log(choiceTag);

  // 클릭하면 스크롤이 위로 올라가는 함수
  const handleTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  };

  // useEffect(() => {
  //   fetch(`http://10.58.4.128:8000/users/?user_tag_id=${choiceTag}`)
  //     .then(res => res.json())
  //     .then(result => console.log(result));
  // }, [choiceTag]);

  useEffect(() => {
    fetch('/data/detailData.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(res => setUserData(res));

    fetch('/data/tagData.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(res => setTagData(res.result));

    // fetch('/data/tagData.json', {
    //   method: 'GET',
    // })
    //   .then(res => res.json())
    //   .then(res => {
    //     if (res.result.length > 3) {
    //       const newtagDataArr = [...res.result];
    //       console.log(newtagDataArr);
    //       newtagDataArr.sort(() => Math.random() - Math.random()).slice(0, 3);
    //       setTagData(newtagDataArr);
    //       console.log(newtagDataArr);
    //     }
    //   });

    fetch('/data/writerData.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(res => setWriterData(res));
  }, []);

  return (
    <div className="main">
      {/* <NavBanner />
      <Nav /> */}
      <Slide userData={userData} />
      <KeyWord />
      <Writers
        tagData={tagData}
        writerData={writerData}
        setChoiceTag={setChoiceTag}
      />
      <Articles userData={userData} />
      <Scroll handleTop={handleTop} />
    </div>
  );
}

export default Main;
