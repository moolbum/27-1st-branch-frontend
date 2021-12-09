import React, { useState, useEffect } from 'react';
import Slide from './Slide/Slide';
import KeyWord from './KeyWord/KeyWord';
import Writers from './Writers/Writers';
import Articles from './Articles/Articles';
import Scroll from './Scroll';
import './Main.scss';

function Main() {
  const [userData, setUserData] = useState([]);
  const [tagData, setTagData] = useState([]);
  const [writerData, setWriterData] = useState([]);

  const [choiceTag, setChoiceTag] = useState(33);
  useEffect(() => {
    fetch(`http://10.58.7.225:8000/users/?user_tag_id=${choiceTag}`)
      .then(res => res.json())
      .then(res => setWriterData(res.SUCCESS));
  }, [choiceTag]);

  useEffect(() => {
    fetch('http://10.58.7.225:8000/branch_tags/userTagList')
      .then(res => res.json())
      .then(res => setTagData(res.result));
  }, []);

  useEffect(() => {
    fetch('/data/userData.json')
      .then(res => res.json())
      .then(res => setUserData(res));
  }, []);

  const randomTag = [...tagData]
    .sort(() => Math.random() - Math.random())
    .slice(0, 3);

  //TSET ==============================
  // useEffect(() => {
  //   fetch('/data/writerData.json')
  //     .then(res => res.json())
  //     .then(res => setWriterData(res));
  // }, []);

  // useEffect(() => {
  //   fetch('/data/tagData.json')
  //     .then(res => res.json())
  //     .then(res => setTagData(res.result));
  // }, []);
  //TSET ==============================

  return (
    <div className="main">
      <Slide userData={userData} />
      <KeyWord />
      <Writers
        // tagData={tagData}
        // randomTags={randomTags}
        // choiceTag={choiceTag}
        writerData={writerData}
        setChoiceTag={setChoiceTag}
        randomTag={randomTag}
      />
      <Articles userData={userData} />
      <Scroll />
    </div>
  );
}

export default Main;
