import './Writers.scss';

function Writers({ writerData, tagData }) {
  const newWiterData = [...writerData];
  const newtagData = [...tagData];
  if (writerData.length > 6) {
    newWiterData.splice(6, newWiterData.length);
  }
  if (tagData.length > 3) {
    newtagData.splice(3, newtagData.length);
  }

  return (
    <div className="writers">
      <span className="title">BRANCH WRITERS</span>
      <span className="subText">브런치 추천 작가</span>
      <div className="tagContainer">
        {newtagData.map(tagList => {
          return (
            <span className="writersTag" key={tagList.id}>
              {tagList.tag_name}
            </span>
          );
        })}
      </div>
      <section className="peopleContainer">
        {newWiterData.map(list => {
          return (
            <div className="people" key={list.id}>
              <img className="peopleImg" src={list.images} alt="UserImage" />
              <span className="peopleName">{list.userName}</span>
              <span className="peopleJob">{list.subName}</span>
              <span className="peopleIntro">{list.info}</span>
              <div className="peopleTag">
                {list.tagName.map((tagName, i) => {
                  return (
                    <span className="writersTag" key={i}>
                      {tagName}
                    </span>
                  );
                })}
                <span className="writersTag">...</span>
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
}

export default Writers;
