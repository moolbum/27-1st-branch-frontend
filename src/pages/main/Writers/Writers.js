import { Link } from 'react-router-dom';
import './Writers.scss';

function Writers({ userData, tagData }) {
  const newUserData = [...userData];

  if (userData.length > 6) {
    newUserData.splice(6, newUserData.length);
  }

  if (tagData.length > 3) {
    tagData.splice(3, tagData.length);
  }

  return (
    <div className="writers">
      <span className="title">BRANCH WRITERS</span>
      <span className="subText">브런치 추천 작가</span>
      <div className="tagContainer">
        {tagData.map(tagList => {
          return (
            <Link to="/" className="writersTag" key={tagList.id}>
              {tagList.tag_name}
            </Link>
          );
        })}
      </div>
      <section className="peopleContainer">
        {newUserData.map(list => {
          return (
            <div className="people" key={list.id}>
              <img className="peopleImg" src={list.images} alt="UserImage" />
              <span className="peopleName">{list.userName}</span>
              <span className="peopleJob">Front-End</span>
              <span className="peopleIntro">
                인문학속 음식, 홍대앞 핑크집짓기, 교육현장속 엄마와 아이들,
                소장시집의 에세이, 시를 읽는 키친, 생각날 때 씁니다. 시쓰기는
                여전히 바쁜 날의 위로와 응원의 쉼표입니다.
              </span>
              <div className="peopleTag">
                <span className="writersTag">JavaScript</span>
                <span className="writersTag">HTML&CSS</span>
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
