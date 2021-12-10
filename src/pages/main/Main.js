import React, { useState, useEffect } from 'react';
import { API } from '../../config';
import Slide from './Slide/Slide';
import KeyWord from './KeyWord/KeyWord';
import Writers from './Writers/Writers';
import Articles from './Articles/Articles';
import Scroll from './Scroll';
import MainNav from '../../components/Nav/MainNav';
import Footer from '../../components/Footer/Footer';
import './Main.scss';

function Main() {
  const [userData, setUserData] = useState([]);
  const [tagData, setTagData] = useState([]);
  const [ditailList, setDitailList] = useState([]);
  const [writerData, setWriterData] = useState([]);
  const [keywords, setKeywords] = useState([]);
  const [changeId, setChangeId] = useState('');

  useEffect(() => {
    fetch(`${API.WRITERDATA + changeId}`)
      .then(res => res.json())
      .then(res => setWriterData(res.SUCCESS));
  }, [changeId]);

  // useEffect(() => {
  //   fetch(`${API.TAGDATA}`)
  //     .then(res => res.json())
  //     .then(res => {
  //       const randomTag = res.result
  //         .sort(() => Math.random() - Math.random())
  //         .slice(0, 3);
  //       setChangeId(randomTag[0].id);
  //       setTagData(randomTag);
  //     });
  // }, []);

  useEffect(() => {
    fetch(`${API.TAGDATA}`)
      .then(res => res.json())
      .then(res => {
        const randomTag = res.result.slice(0, 3);
        setChangeId(randomTag[0].id);
        setTagData(randomTag);
      });
  }, []);

  useEffect(() => {
    fetch(`${API.DITAILLIST}`)
      .then(res => res.json())
      .then(res => {
        setDitailList(res.result);
      });
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
      <MainNav />
      <Slide userData={userData} ditailList={ditailList} />
      <KeyWord keywords={keywords} />
      <Writers
        writerData={writerData}
        randomTag={tagData}
        setChangeId={setChangeId}
      />
      <Articles ditailList={ditailList} />
      <Scroll />
      <Footer />
    </div>
  );
}

export default Main;
