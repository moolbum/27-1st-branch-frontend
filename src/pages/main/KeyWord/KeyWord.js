import { useState, useEffect } from 'react';
import './KeyWord.scss';

function KeyWord() {
  const [keyData, setKeyData] = useState([]);

  useEffect(() => {
    fetch('/data/keyData.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(keyData => setKeyData(keyData));
  }, []);

  return (
    <span className="keyWord">
      <span className="title">BRANCH KEYWORD</span>
      <span className="subText">키워드로 분류된 다양한 글 모음</span>
      <section className="container">
        <div className="containerLine">
          {keyData.map(KeyList => {
            return (
              <div className="contents" key={KeyList.id}>
                {KeyList.keyData}
              </div>
            );
          })}
        </div>
      </section>
    </span>
  );
}

export default KeyWord;
