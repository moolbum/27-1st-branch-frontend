import { Link } from 'react-router-dom';
import './MainButton.scss';

function MainButton() {
  return (
    <div className="navRight">
      <Link to="signup" className="startButton">
        시작하기
      </Link>
      <img
        className="searchIcon"
        src="/images/Nav/iconmonstr-search-thin.svg"
        alt="검색"
      />
    </div>
  );
}

export default MainButton;
