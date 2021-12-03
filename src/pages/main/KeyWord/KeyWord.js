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
      <span className="Title">BRANCH KEYWORD</span>
      <span className="SubText">키워드로 분류된 다양한 글 모음</span>
      <section className="Container">
        <div className="ContainerLine">
          {keyData.map(KeyList => {
            return (
              <div className="Contents" key={KeyList.id}>
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
