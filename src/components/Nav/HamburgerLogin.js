import './HamburgerLogin.scss';

function HamburgerLogin({ openHamburger, hamburgerToggle }) {
  return (
    <section
      className="hamburgerLogin"
      style={
        hamburgerToggle
          ? {
              visibility: 'visible',
              left: '0px',
              transition: 'all 0.3s',
            }
          : {
              visibility: 'hidden',
              left: '-260px',
              transition: 'all 0.3s',
            }
      }
    >
      <div className="hamburgerLeftContainer">
        <div className="top">
          <img
            className="userImg"
            src="./images/Nav/microsoft-edge-FAaz8lkinzs-unsplash.jpg"
            alt="프로필사진"
          />
          <span className="userName">이름이양</span>
          <span className="userCode">개인코드양</span>
          <div className="startContainer">
            <span className="startButton">글쓰기</span>
            <span className="startButton">작성자 신청</span>
          </div>
        </div>
        <div className="buttom">
          <ul className="list">
            <li className="listIndex list1">내 브런치</li>
            <li className="listIndex">작가의 서랍</li>
          </ul>
          <div className="centerLine">
            <div className="line" />
            <span className="lineLogo">b</span>
            <div className="line" />
          </div>
          <ul className="list">
            <li className="listIndex">브랜치 홈</li>
            <li className="listIndex">브랜치 나우</li>
            <li className="listIndex">브랜치 책방</li>
            <li className="listIndex">브랜치 글 읽는 서재</li>
            <li className="listIndex">피드</li>
          </ul>
          <div className="bestCode">
            오늘의 감성코드 보기
            <div className="underLine" />
          </div>
          <div className="findID">계정을 잊어버리셨나요?</div>
          <div className="buttonContainer">
            <div className="settings">설정</div>
            <div className="logout">로그아웃</div>
          </div>
        </div>
      </div>
      <div className="dim" onClick={openHamburger} />
    </section>
  );
}

export default HamburgerLogin;
