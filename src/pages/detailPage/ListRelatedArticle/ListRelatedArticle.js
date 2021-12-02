import './ListRelatedArticle.scss';

function ListRelatedArticle({ relatedData }) {
  return (
    <ul className="listRelatedArticle">
      {relatedData.map(data => {
        const { id, content, sub_title, thumbnail, title, user } = data;
        return (
          <li className="viewImpression" key={id}>
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
        );
      })}
    </ul>
  );
}

export default ListRelatedArticle;
