import { Link } from 'react-router-dom';
import './WrapAuthor.scss';
import { useState } from 'react';

function WrapAuthor({ authorData }) {
  const [subscribeBtnTxt, setSubscribeBtnTxt] = useState('구독하기');
  const [subscribeCount, setSubscribeCount] = useState(0);

  const onClickSubscribeBtn = e => {
    e.preventDefault();
    setSubscribeBtnTxt(
      e.target.innerText === '구독하기' ? '구독중' : '구독하기'
    );
    setSubscribeCount(
      e.target.innerText === '구독하기'
        ? subscribeCount + 1
        : subscribeCount - 1
    );
  };

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
                <span className="numSubscription">{subscribeCount}</span>
              </span>
              <span className="wrapSubBtn">
                <Link to="/myPage">
                  <button className="btnSuggest">개발자보기</button>
                </Link>
                <button className="btnFollow" onClick={onClickSubscribeBtn}>
                  {subscribeBtnTxt}
                </button>
              </span>
            </div>
          </div>
        );
      })}
    </article>
  );
}

export default WrapAuthor;
