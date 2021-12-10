import { Link } from 'react-router-dom';
import './Writers.scss';

function Writers({ writerData, randomTag, setChangeId }) {
  const newWiterDataArr = [...writerData];

  if (writerData.length > 6) {
    newWiterDataArr.splice(6, writerData.length);
  }
  return (
    <div className="writers">
      <span className="title">BsetTagRANCH WRITERS</span>
      <span className="subText">브런치 추천 작가</span>
      <div className="tagContainer">
        {randomTag.map(tagList => {
          return (
            <span
              className="writersTag"
              key={tagList.id}
              onClick={() => setChangeId(tagList.id)}
            >
              {tagList.name}
            </span>
          );
        })}
      </div>
      <section className="peopleContainer">
        {newWiterDataArr.map(list => {
          return (
            <Link
              to={`/userpage/${list.user_id}`}
              className="people"
              key={list.user_id}
            >
              <img
                className="peopleImg"
                src={list.profile_photo}
                alt="UserImage"
              />
              <span className="peopleName">{list.name}</span>
              <span className="peopleJob">{list.position}</span>
              <span className="peopleIntro">{list.description}</span>
              <div className="peopleTag">
                {list.tags.map((tagName, index) => {
                  if (list.tags.length > 2) {
                    list.tags.splice(2, list.tags.length);
                  }
                  return (
                    <span className="writersTag" key={index}>
                      {tagName.name}
                    </span>
                  );
                })}
                <span className="writersTag">...</span>
              </div>
            </Link>
          );
        })}
      </section>
    </div>
  );
}

export default Writers;
