import React from 'react';
import './MyPage.scss';

function MyPage() {
  return (
    <div className="myPage">
      <div className="header" />
      <div className="profileImageWrap">
        <img className="profileImage" src="" alt="." />
      </div>

      <main className="mainContainer">
        <div className="profile">
          <p className="name">이용우</p>
          <p className="job">프론트엔드</p>
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
            <button className="writingButton">글쓰기</button>
          </div>
        </div>
      </main>

      <div className="writerContainer">
        <p className="writerTitle">작가소개</p>
        <div className="writerWrap">
          <p>소개</p>
          <p>
            여행작가 나보영입니다. 채고쓰고 신문과 잡지에 연재도 하고 방송에도
            출연해요. 카카오 공식 여행 분야 크리에이터로서 여행 컨텐츠도
            운영합니다.
          </p>
          <p>기타 이력 및 포트폴리오</p>
          <p>
            책<br />
            2018
          </p>
        </div>
      </div>
    </div>
  );
}

export default MyPage;
