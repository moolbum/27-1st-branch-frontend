import React, { useState } from 'react';
import './MyPage.scss';

function MyPage() {
  const [userInfoData, setUserInfoData] = useState({
    nickname: '',
    position: '',
    description: '',
  });

  const changeTextHandler = e => {
    const { value, name } = e.target;
    setUserInfoData({
      ...userInfoData,
      [name]: value,
    });
  };

  return (
    <div className="myPage">
      <div className="header" />
      <div className="profileImageWrap">
        <img
          className="profileImage"
          src="https://images.pexels.com/photos/10391671/pexels-photo-10391671.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
          alt=""
        />
      </div>

      <main className="mainContainer">
        <div className="profile">
          <form className="profile">
            <input
              name="nickname"
              type="text"
              className="nickname"
              placeholder="이용우"
              onChange={changeTextHandler}
            />
            <input
              name="position"
              type="text"
              className="position"
              placeholder="프론트엔드"
              onChange={changeTextHandler}
            />
          </form>
          <div className="subscriber">
            <div className="subscriberFlex">
              <div className="subscriberWrap">
                <p className="subscriberText">구독자</p>
                <p className="subscriberNumber">0</p>
              </div>
              <div className="subscriberWrap">
                <p className="subscriberText">관심작가</p>
                <p className="subscriberNumber">1</p>
              </div>
            </div>
            <div>
              <button
                className="writingButton"
                type="button"
                onClick={() => {
                  alert('글쓰기 권한이 없습니다.');
                }}
              >
                글쓰기
              </button>
              <button className="writingButton" type="button" onClick="">
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
              onChange={changeTextHandler}
              placeholder="작가소개"
              rows="4"
              cols="30"
            />
          </form>
        </div>
      </div>
    </div>
  );
}

export default MyPage;
