import { Link } from 'react-router-dom';
import './Writers.scss';

function Writers({ userData }) {
  const copyUserData = [...userData];
  if (copyUserData.length > 6) {
    copyUserData.splice(6, copyUserData.length);
  }

  return (
    <div className="writers">
      <span className="writersTitle">BRANCH WRITERS</span>
      <span className="writersSubText">브런치 추천 작가</span>
      <div className="writersTagContainer">
        <Link to="" className="writersTag">
          JavaScript
        </Link>
        <Link to="" className="writersTag">
          HTML&CSS
        </Link>
        <Link to="" className="writersTag">
          django
        </Link>
      </div>
      <section className="writersPeopleContainer">
        {copyUserData.map(list => {
          return (
            <div className="writersPeople" key={list.id}>
              <img
                className="writersPeopleImg"
                src={list.images}
                alt="UserImage"
              />
              <span className="writersPeopleName">{list.userName}</span>
              <span className="writersPeopleJob">Front-End</span>
              <span className="writersPeopleIntro">
                인문학속 음식, 홍대앞 핑크집짓기, 교육현장속 엄마와 아이들,
                소장시집의 에세이, 시를 읽는 키친, 생각날 때 씁니다. 시쓰기는
                여전히 바쁜 날의 위로와 응원의 쉼표입니다.
              </span>
              <div className="writersPeopleTag">
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
