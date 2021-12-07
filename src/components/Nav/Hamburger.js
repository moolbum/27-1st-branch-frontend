import './Hamburger.scss';

function Hamburger({ openHamburger, hamburgerToggle }) {
  return (
    <section
      className="hamburger"
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
          <span className="infoText">you can mak anyyhing by code</span>
          <span className="infoName">- G.T.Brac -</span>
          <span className="startButton">브랜치 시작하기</span>
        </div>
        <div className="buttom">
          <ul className="list">
            <li className="listIndex list1">내 브런치</li>
            <li className="listIndex">작가의 서랍</li>
          </ul>
          <div className="bestCode">
            오늘의 감성코드 보기
            <div className="underLine" />
          </div>
          <div className="findID">계정을 잊어버리셨나요?</div>
        </div>
      </div>
      <div className="dim" onClick={openHamburger} />
    </section>
  );
}

export default Hamburger;
