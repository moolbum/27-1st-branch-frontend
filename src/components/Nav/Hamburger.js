import './Hamburger.scss';

function Hamburger() {
  return (
    <section className="Hamburger">
      <div className="HamburgerLeftContainer">
        <div className="top">
          <img className="userImg" src="" alt="프로필사진" />
          <span className="infoText">you can mak anyyhing by code</span>
          <span className="infoName">- G.T.Brac -</span>
          <span className="startButton">브랜치 시작하기</span>
        </div>
        <div className="buttom">
          <ul className="list">
            <li className="listIndex">브랜치 홈</li>
            <li className="listIndex">브랜치 나우</li>
          </ul>
          <div className="bestCode">
            오늘의 감성코드 보기
            <div className="underLine" />
          </div>
          <div className="findID">계정을 잊어버리셨나요?</div>
        </div>
      </div>
    </section>
  );
}

export default Hamburger;
