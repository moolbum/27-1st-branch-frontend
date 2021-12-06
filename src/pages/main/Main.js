import React, { useState, useEffect } from 'react';
import Slide from './Slide/Slide';
import KeyWord from './KeyWord/KeyWord';
import Writers from './Writers/Writers';
import Articles from './Articles/Articles';
import './Main.scss';

function Main() {
  const [userData, setUserData] = useState([]);
  const [tagData, setTagData] = useState([]);
  const [writerData, setWriterData] = useState([]);
  // const [ScrollY, setScrollY] = useState(0);
  const [choiceTag, setChoiceTag] = useState(2);
  console.log(choiceTag);

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

    fetch('/data/writerData.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(res => setWriterData(res));
  }, []);

  return (
    <div className="main">
      <Slide userData={userData} />
      <KeyWord />
      <Writers
        tagData={tagData}
        writerData={writerData}
        setChoiceTag={setChoiceTag}
      />
      <Articles userData={userData} />
      <span
        className="topButton"
        onClick={handleTop}
        // style={window.scrollY < 260 ? { display: 'none' } : null}
      >
        <span className="topButtonText">
          Top
          <img
            className="topButtonImg"
            src="./images/Main/iconmonstr-arrow-right-thin.svg"
            alt="TopButton"
          />
        </span>
      </span>
    </div>
  );
}

export default Main;
