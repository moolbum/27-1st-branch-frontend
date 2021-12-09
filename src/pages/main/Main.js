import React, { useState, useEffect } from 'react';
import { API } from '../../config';
import Slide from './Slide/Slide';
import KeyWord from './KeyWord/KeyWord';
import Writers from './Writers/Writers';
import Articles from './Articles/Articles';
import Scroll from './Scroll';
import Nav from '../../components/Nav/Nav';
import Footer from '../../components/Footer/Footer';
import './Main.scss';

function Main() {
  const [userData, setUserData] = useState([]);
  const [tagData, setTagData] = useState([]);
  const [ditailList, setDitailList] = useState([]);
  const [writerData, setWriterData] = useState([]);
  const [keywords, setKeywords] = useState([]);
  // const [choiceTag, setChoiceTag] = useState(32);

  const choiceTag = 33;
  console.log(choiceTag);

  const randomTag = [...tagData]
    .sort(() => Math.random() - Math.random())
    .slice(0, 3);

  useEffect(() => {
    fetch(`${API.WRITERDATA + choiceTag}`)
      .then(res => res.json())
      .then(res => setWriterData(res.SUCCESS));
  }, [choiceTag]);

  useEffect(() => {
    fetch(`${API.TAGDATA}`)
      .then(res => res.json())
      .then(res => setTagData(res.result));
  }, []);

  useEffect(() => {
    fetch(`${API.DITAILLIST}`)
      .then(res => res.json())
      .then(res => setDitailList(res.result));
  }, []);

  useEffect(() => {
    fetch(`${API.KEYWORDS}`)
      .then(res => res.json())
      .then(res => setKeywords(res.result));
  }, []);

  useEffect(() => {
    fetch('./data/userData.json')
      .then(res => res.json())
      .then(res => setUserData(res));
  }, []);

  return (
    <div className="main">
      <Nav />
      <Slide userData={userData} ditailList={ditailList} />
      <KeyWord keywords={keywords} />
      <Writers
        writerData={writerData}
        choiceTag={choiceTag}
        randomTag={randomTag}
      />
      <Articles ditailList={ditailList} />
      <Scroll />
      <Footer />
    </div>
  );
}

export default Main;
