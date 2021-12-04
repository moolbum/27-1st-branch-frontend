import './RightAuthorBox.scss';

function SearchRecommend({ authorBoxData }) {
  return (
    <>
      {authorBoxData.map(authorData => {
        const { id, user, profile_photo } = authorData;
        return (
          <div className="wrapWriter" key={id}>
            <span className="thumbImage">
              <img
                src={profile_photo}
                className="thumbItemImage"
                alt="추천작가섬네일이미지"
              />
            </span>
            <div className="detailRecommend">
              <span className="textRecommend">{user}</span>
              <div className="textInfo">
                <span className="nameText">글 135</span>
                <span className="iconDot" />
                <span className="numText">구독자 671</span>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default SearchRecommend;
