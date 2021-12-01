import './userData.scss';

function ListRelatedArticle(props) {
  const { data } = props;
  // console.log(props);
  return (
    <ul className="listRelatedArticle">
      {data.map(data => {
        return (
          <li className="viewImpression" key={data.id}>
            <img
              src={data.thumnail}
              className="relatedCover"
              alt="컴포넌츠 이미지"
            />
            <strong className="titleRelated">{data.title}</strong>
            <div className="wrapRelatedDesc">
              <span className="subTitleRelatedDesc">{data.sub_title}</span>
              <p className="descRelated">{data.content}</p>
            </div>
            <span className="textName">by {data.user}</span>
          </li>
        );
      })}
    </ul>
  );
}

export default ListRelatedArticle;
