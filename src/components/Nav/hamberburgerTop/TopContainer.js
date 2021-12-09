import './TopContainer.scss';

function TopContainer() {
  return (
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
  );
}

export default TopContainer;
