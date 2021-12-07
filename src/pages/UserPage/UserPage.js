import React, { useState, useEffect } from 'react';
import './UserPage.scss';

function MyPage() {
  const [myPageData, setMyPageData] = useState([]);
  // const [userInfoData, setUserInfoData] = useState({
  //   nickname: '',
  //   position: '',
  //   description: '',
  //   profile_photo: '',
  //   mysubscription: '',
  //   writer: '',
  // });

  // const changeTextHandler = e => {
  //   const { value, name } = e.target;
  //   setUserInfoData({
  //     ...userInfoData,
  //     [name]: value,
  //   });
  // };

  useEffect(() => {
    fetch('data/MyPageData.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(res => {
        setMyPageData(res);
      });
  }, []);

  // useEffect(() => {
  //   fetch('data/MyPageData.json', {
  //     method: 'POST',
  //     body: JSON.stringify({}),
  //   })
  //     .then(res => res.json())
  //     .then(res => {
  //       setMyPageData(res);
  //     });
  // }, []);

  const subscribeToggleHandler = e => {
    const { innerText } = e.target;
    if (innerText === '구독하기') {
    }
  };

  return (
    <div className="myPage">
      <div className="header" />
      {myPageData.map(user => {
        return (
          <div key={user.id}>
            <div className="profileImageWrap">
              <img
                className="profileImage"
                src={user.profile_photo}
                alt="프로필사진"
              />
            </div>

            <main className="mainContainer">
              <div className="profile">
                <form className="profile">
                  <h2
                    name="nickname"
                    type="text"
                    className="nickname"
                    placeholder="이용우"
                  >
                    {user.nickname}
                  </h2>
                  <p
                    name="position"
                    type="text"
                    className="position"
                    placeholder="프론트엔드"
                  >
                    {user.position}
                  </p>
                </form>
                <div className="subscriber">
                  <div className="subscriberFlex">
                    <div className="subscriberWrap">
                      <p className="subscriberText">구독자</p>
                      <p className="subscriberNumber">{user.mysubscription}</p>
                    </div>
                    <div className="subscriberWrap">
                      <p className="subscriberText">관심작가</p>
                      <p className="subscriberNumber">{user.writer}</p>
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
                    {/* <button
                      className="writingButton"
                      type="button"
                      onClick={userDataSavaHandler}
                    >
                      저장하기
                    </button> */}
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
                    value={user.description}
                  />
                </form>
              </div>
            </div>
          </div>
        );
      })}
      ;
    </div>
  );
}

export default MyPage;
