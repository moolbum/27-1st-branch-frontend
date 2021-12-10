import './LeftArticleBox.scss';
import { Link } from 'react-router-dom';

function LeftArticleBox({ articleBoxData }) {
  return (
    <div className="wrapArticleList">
      {articleBoxData.map(boxData => {
        const {
          posting_id,
          user,
          title,
          sub_title,
          content,
          thumbnail,
          created_at,
        } = boxData;
        // to="/detailPage/"
        return (
          <Link to={`/detailPage/${posting_id}`} key={posting_id}>
            <ul className="listArticle">
              <li className="listImageAnimate">
                <div className="postTitleAndImage">
                  <h1 className="titleSubject">{title}</h1>
                  <div className="wrapSubContent">
                    <p className="titleSub">{sub_title}</p>
                    <span className="iconBar" />
                    <span className="articleContent">{content}</span>
                  </div>
                  <span className="postAppend">
                    <span className="nameText">공유 0</span>
                    <span className="iconDot" />
                    <span className="nameText">댓글 3</span>
                    <span className="iconDot" />
                    <span className="postTime">{created_at.slice(0, 10)}</span>
                    <span className="iconDot" />
                    <span className="iconBy">by</span>
                    <span className="nameText">{user}</span>
                  </span>
                </div>
                <div className="postThumb">
                  <img
                    src={thumbnail}
                    className="imageThumb"
                    alt="포스트섬네일"
                  />
                </div>
              </li>
            </ul>
          </Link>
        );
      })}
    </div>
  );
}

export default LeftArticleBox;
