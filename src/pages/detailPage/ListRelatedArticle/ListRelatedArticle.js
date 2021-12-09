import { Link } from 'react-router-dom';
import './ListRelatedArticle.scss';

function ListRelatedArticle({ relatedData }) {
  console.log(relatedData);
  return (
    <ul className="listRelatedArticle">
      {relatedData.result?.map((data, idx) => {
        const { id, content, sub_title, thumbnail, title, user } = data;
        return (
          <Link to={`/detailPage/${id}`} key={idx}>
            <li className="viewImpression">
              <img
                src={thumbnail}
                className="relatedCover"
                alt="컴포넌츠 이미지"
              />
              <strong className="titleRelated">{title}</strong>
              <div className="wrapRelatedDesc">
                <span className="subTitleRelatedDesc">{sub_title}</span>
                <p className="descRelated">{content}</p>
              </div>
              <span className="textName">by {user}</span>
            </li>
          </Link>
        );
      })}
    </ul>
  );
}

export default ListRelatedArticle;
