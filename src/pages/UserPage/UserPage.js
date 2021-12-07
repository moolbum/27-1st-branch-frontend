import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import './UserPage.scss';

function MyPage() {
  const [userPageData, setUserPageData] = useState([]);
  const params = useParams();

  const {
    nickname,
    position,
    mysubscription,
    writer,
    description,
    profile_photo,
  } = userPageData;

  useEffect(() => {
    fetch(`API/${params.email}`, {
      method: 'GET',
    })
      .then(res => res.json())
      .then(res => {
        setUserPageData(res);
      });
  });

  const subscribeToggleHandler = e => {
    e.target.innerText === '구독하기'
      ? (e.target.innerText = '구독중')
      : (e.target.innerText = '구독하기');
  };

  return (
    <div className="myPage">
      <div className="header" />
      <div className="profileImageWrap">
        <div
          className="profileImage"
          style={{ backgroundImage: `url(${profile_photo})` }}
          alt="프로필사진"
        />
      </div>

      <main className="mainContainer">
        <div className="profile">
          <form className="profile">
            <h2 name="nickname" type="text" className="nickname" placeholder="">
              {nickname}
            </h2>
            <p
              name="position"
              type="text"
              className="position"
              placeholder="프론트엔드"
            >
              {position}
            </p>
          </form>
          <div className="subscriber">
            <div className="subscriberFlex">
              <div className="subscriberWrap">
                <p className="subscriberText">구독자</p>
                <p className="subscriberNumber">{mysubscription}</p>
              </div>
              <div className="subscriberWrap">
                <p className="subscriberText">관심작가</p>
                <p className="subscriberNumber">{writer}</p>
              </div>
            </div>
            <div>
              <button
                className="writingButton"
                type="button"
                onClick={subscribeToggleHandler}
              >
                구독하기
              </button>
            </div>
          </div>
        </div>
      </main>

      <div className="writerContainer">
        <p className="writerTitle">작가소개</p>
        <div className="writerWrap">
          <p className="information">소개</p>
          <form method="POST">
            <textarea
              name="description"
              className="description"
              placeholder="작가소개"
              rows="4"
              cols="30"
              value={description}
              disabled="true"
            />
          </form>
        </div>
      </div>
    </div>
  );
}

export default MyPage;
