import './Title.scss';

function Title() {
  return (
    <>
      <div className="title">
        <h3 className="mainTitle">
          코드가 작품이 되는 공간, 브랜치
          <img
            className="img"
            src="/images/Main/microsoft-edge-FAaz8lkinzs-unsplash.jpg"
            alt="f"
          />
        </h3>
        <span className="mainSubTitleContainer">
          <p className="mainSubTitle">
            브랜치에 담긴 아름다운 작품을 감상해보세요.
          </p>
          <p className="mainSubTitle">그리고 다시 꺼내 보세요.</p>
          <p className="mainSubTitle2">머리 속 간직하고 있는 코드와 감성을</p>
        </span>
      </div>
      <span className="newUpData">
        <span>Update</span>
        <span className="Text">댓글 쓰기 허용 기능과 유저 차단 기능 추가</span>
      </span>
    </>
  );
}

export default Title;
