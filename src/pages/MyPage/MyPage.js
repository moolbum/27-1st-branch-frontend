import React from 'react';
import './MyPage.scss';

function MyPage() {
  return (
    <div className="myPage">
      <div className="header" />
      <div className="profileImage">
        <img src="" alt="프로필사진" />
      </div>
      <main>
        <h2>이용우</h2>
        <p>프론트엔드</p>
        <div className="subscribeWrap">
          <div>
            <p>구독자</p>
            <p>0</p>
          </div>
          <div>
            <p>관심작가</p>
            <p>1</p>
          </div>
        </div>
        <button>글쓰기</button>
      </main>
    </div>
  );
}

export default MyPage;
