import { Link } from 'react-router-dom';
import './KeyWord.scss';

function KeyWord({ keywords }) {
  const newKeywords = [...keywords].splice(0, 18);
  return (
    <span className="keyWord">
      <span className="title">BRANCH KEYWORD</span>
      <span className="subText">키워드로 분류된 다양한 글 모음</span>
      <section className="container">
        <div className="containerLine">
          {newKeywords.map(KeyList => {
            return (
              <Link to="/listPage" className="contents" key={KeyList.id}>
                {KeyList.name}
              </Link>
            );
          })}
        </div>
      </section>
    </span>
  );
}

export default KeyWord;
