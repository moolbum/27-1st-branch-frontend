import './TopLoginContainer.scss';

function TopLoginContainer() {
  return (
    <div className="loginTop">
      <img
        className="userImg"
        src="./images/Main/microsoft-edge-FAaz8lkinzs-unsplash.jpg"
        alt="프로필사진"
      />
      <span className="userName">김태영</span>
      <span className="userCode">브랜치에 오신것을 환영합니다.</span>
      <div className="startContainer">
        <span className="startButton">글쓰기</span>
        <span className="startButton">작성자 신청</span>
      </div>
    </div>
  );
}

export default TopLoginContainer;
