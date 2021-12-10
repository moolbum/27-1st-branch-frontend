import './RightAuthorBox.scss';

function SearchRecommend({ authorBoxData }) {
  return (
    <>
      {authorBoxData.map(authorData => {
        const { posting_id, user, thumbnail } = authorData;
        return (
          <div className="wrapWriter" key={posting_id}>
            <span className="thumbImage">
              <img
                src={thumbnail}
                className="thumbItemImage"
                alt="추천작가섬네일이미지"
              />
            </span>
            <div className="detailRecommend">
              <span className="textRecommend">{user}</span>
              <div className="textInfo">
                <span className="nameText">글 135</span>
                <span className="iconDot" />
                <span className="numText">구독자 41</span>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default SearchRecommend;
