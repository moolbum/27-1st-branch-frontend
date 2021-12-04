import { Link } from 'react-router-dom';
import './WrapAuthor.scss';

function WrapAuthor({ authorData }) {
  return (
    <article className="wrapAuthor">
      {authorData.map(author => {
        const { id, nickname, description, position, profile_photo } = author;
        return (
          <div className="innerAuthor" key={id}>
            <strong className="authorName">{nickname}</strong>
            <span className="authorBelong">
              <span className="occupation">{position}</span>
            </span>
            <img className="imgAuthor" src={profile_photo} alt="작가이미지" />
            <div className="authorDesc">
              <p>{description}</p>
            </div>
            <div className="subscription">
              <span className="infoSubscription">
                <span>구독자</span>
                <span className="numSubscription">0</span>
              </span>
              <span className="wrapSubBtn">
                <Link to="/myPage">
                  <button className="btnSuggest">개발자보기</button>
                </Link>
                <button className="btnFollow">구독하기</button>
              </span>
            </div>
          </div>
        );
      })}
    </article>
  );
}

export default WrapAuthor;
