import './Writers.scss';

function Writers({ writerData, setChoiceTag, randomTag }) {
  const newWiterDataArr = [...writerData];
  if (writerData.length > 6) {
    newWiterDataArr.splice(6, writerData.length);
  }

  return (
    <div className="writers">
      <span className="title">BRANCH WRITERS</span>
      <span className="subText">브런치 추천 작가</span>
      <div className="tagContainer">
        {randomTag.map(tagList => {
          return (
            <span
              className="writersTag"
              key={tagList.id}
              onClick={() => {
                setChoiceTag(tagList.id);
              }}
            >
              {tagList.name}
            </span>
          );
        })}
      </div>
      <section className="peopleContainer">
        {newWiterDataArr.map((list, index) => {
          return (
            <div className="people" key={index}>
              <img
                className="peopleImg"
                src={list.profile_photo}
                alt="UserImage"
              />
              <span className="peopleName">{list.name}</span>
              <span className="peopleJob">{list.posting}</span>
              <span className="peopleIntro">{list.description}</span>
              <div className="peopleTag">
                {list.tags.map(tagName => {
                  if (list.tags.length > 2) {
                    list.tags.splice(2, list.tags.length);
                  }
                  return (
                    <span className="writersTag" key={tagName.id}>
                      {tagName.tag_name}
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
