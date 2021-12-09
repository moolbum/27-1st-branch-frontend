import './TopLoginContainer.scss';

function TopLoginContainer() {
  return (
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
  );
}

export default TopLoginContainer;
