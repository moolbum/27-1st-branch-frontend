import { useEffect, useState } from 'react';
import './Writers.scss';

function Writers({ writerData, tagData, setChoiceTag }) {
  const [randomTags, setRandomTags] = useState([]);
  // const newWiterDataArr = [...writerData];

  useEffect(() => {
    setRandomTags(
      [...tagData].sort(() => Math.random() - Math.random()).slice(0, 3)
    );
  }, [tagData]);

  if (tagData.length > 3) {
    randomTags.splice(3, tagData.length);
  }

  // if (writerData.length > 6) {
  //   newWiterDataArr.splice(6, writerData.length);
  // }

  return (
    <div className="writers">
      <span className="title">BRANCH WRITERS</span>
      <span className="subText">브런치 추천 작가</span>
      <div className="tagContainer">
        {randomTags.map(tagList => {
          return (
            <span
              className="writersTag"
              key={tagList.tag_id}
              onClick={() => {
                setChoiceTag(tagList.tag_id);
              }}
            >
              {tagList.tag_name}
            </span>
          );
        })}
      </div>
      <section className="peopleContainer">
        {writerData.map(list => {
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
