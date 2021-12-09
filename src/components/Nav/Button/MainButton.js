import './MainButton.scss';

function MainButton() {
  return (
    <div className="navRight">
      <div className="startButton">시작하기</div>
      <img
        className="searchIcon"
        src="/images/Nav/iconmonstr-search-thin.svg"
        alt="검색"
      />
    </div>
  );
}

export default MainButton;
