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
  const [choiceTag, setChoiceTag] = useState(0);

  useEffect(() => {
    fetch(`http://10.58.4.128:8000/users/?user_tag_id=${choiceTag}`)
      .then(res => res.json())
      .then(result => setWriterData(result));
  }, [choiceTag]);

  useEffect(() => {
    fetch('/data/detailData.json')
      .then(res => res.json())
      .then(res => setUserData(res));
  }, []);

  useEffect(() => {
    fetch('/data/tagData.json')
      .then(res => res.json())
      .then(res => setTagData(res.result));
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
      <Scroll />
    </div>
  );
}

export default Main;
