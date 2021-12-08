import React, { useState, useEffect } from 'react';
import { API } from '../../config';
import './MyPage.scss';

function MyPage() {
  const [myPageData, setMyPageData] = useState({});
  const [userInfoData, setUserInfoData] = useState({
    nickname: '',
    email: '',
    description: '',
    profile_photo: '',
  });

  const { nickname, email, description, profile_photo } = myPageData;
  const changeTextHandler = e => {
    const { value, name } = e.target;
    setUserInfoData({
      ...userInfoData,
      [name]: value,
    });
  };

  useEffect(() => {
    fetch(`${API.MYPAGE}`, {
      method: 'GET',
      headers: { Authorization: localStorage.getItem('TOKEN') },
    })
      .then(res => res.json())
      .then(data => {
        if (data.message === 'SUCCESS') {
          setMyPageData(data.result);
        }
      });
  }, []);

  return (
    <div className="myPage">
      <div className="header" />
      <div className="profileImageWrap">
        <label>
          <p
            className="profileImageLabel"
            type="file"
            onChange={changeTextHandler}
          />
          <div
            className="profileImage"
            style={{ backgroundImage: `url(${profile_photo})` }}
          />
        </label>
      </div>

      <main className="mainContainer">
        <div className="profile">
          <form className="profile">
            <p
              name="nickname"
              type="text"
              className="nickname"
              placeholder=""
              onChange={changeTextHandler}
            >
              {nickname}
            </p>
            <p
              name="position"
              type="text"
              className="position"
              placeholder=""
              onChange={changeTextHandler}
            >
              {email}
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
                <p className="subscriberNumber">12</p>
              </div>
            </div>
            <div>
              <button className="writingButton" type="button">
                편집하기
              </button>
              <button className="writingButton" type="button">
                저장하기
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
              onChange={changeTextHandler}
            />
          </form>
        </div>
      </div>
    </div>
  );
}

export default MyPage;
