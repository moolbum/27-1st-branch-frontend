import { Link } from 'react-router-dom';
import './WrapAuthor.scss';
import { useState } from 'react';
import BtnSub from '../../BtnSub';
import BtnActiveSub from '../../BtnActiveSub';

function WrapAuthor({ authorData }) {
  const { nickname, description, position } = authorData.results;

  const [subscribeCount, setSubscribeCount] = useState(0);
  const [btnSubValue, setBtnSubValue] = useState(false);
  const [btnActiveSubValue, setBtnActiveSubValue] = useState(false);

  const changeBtn = () => {
    setBtnSubValue(!btnSubValue);
  };

  const changeActiveBtn = () => {
    setBtnActiveSubValue(!btnSubValue);
  };

  const onClickSubscribeBtn = e => {
    e.preventDefault();
    setSubscribeCount(
      e.target.innerText === '구독하기'
        ? subscribeCount + 1
        : subscribeCount - 1
    );
  };

  return (
    <article className="wrapAuthor">
      <div className="innerAuthor">
        <strong className="authorName">{nickname}</strong>
        <span className="authorBelong">
          <span className="occupation">{position}</span>
        </span>
        <img
          className="imgAuthor"
          src="/images/DetailPage/authorProfile.jpg"
          alt="작가이미지"
        />
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
            {!btnSubValue === !btnActiveSubValue ? (
              <BtnSub
                setBtnSubValue={setBtnSubValue}
                btnSubValue={btnSubValue}
                changeBtn={changeBtn}
                onClick={onClickSubscribeBtn}
              />
            ) : (
              <BtnActiveSub
                setBtnSubValue={setBtnSubValue}
                btnActiveSubValue={btnActiveSubValue}
                changeActiveBtn={changeActiveBtn}
                changeBtn={changeBtn}
                onClick={onClickSubscribeBtn}
              />
            )}
          </span>
        </div>
      </div>
    </article>
  );
}

export default WrapAuthor;
