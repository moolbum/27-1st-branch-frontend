import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { API } from '../../config';
import './UserPage.scss';

function UserPage() {
  const [userPageData, setUserPageData] = useState([]);
  const params = useParams();

  useEffect(() => {
    fetch(`${API.USER_PAGE}/${params.user_id}`, {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        if (data.message === 'SUCCESS') {
          setUserPageData(data.result);
        }
      });
  }, [params.user_id]);

  const subscribeToggleHandler = e => {
    e.target.innerText === '구독하기'
      ? (e.target.innerText = '구독중')
      : (e.target.innerText = '구독하기');
  };

  return (
    <div className="myPage">
      <div className="header">
        <div className="profileImageWrap">
          <div
            className="profileImage"
            style={{ backgroundImage: `url(${userPageData.profile_photo})` }}
            alt="프로필사진"
          />
        </div>
      </div>
      <main className="mainContainer">
        <div className="profile">
          <form className="profile">
            <h2 name="nickname" type="text" className="nickname" placeholder="">
              {userPageData.nickname}
            </h2>
            <p
              name="position"
              type="text"
              className="position"
              placeholder="프론트엔드"
            >
              {userPageData.email}
            </p>
          </form>
          <div className="subscriber">
            <div className="subscriberFlex">
              <div className="subscriberWrap">
                <p className="subscriberText">구독자</p>
                <p className="subscriberNumber">15</p>
              </div>
              <div className="subscriberWrap">
                <p className="subscriberText">관심작가</p>
                <p className="subscriberNumber">10</p>
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
              value={userPageData.description}
              disabled="true"
            />
          </form>
        </div>
      </div>
    </div>
  );
}

export default UserPage;
