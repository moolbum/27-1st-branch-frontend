import { Link } from 'react-router-dom';
import './TopContainer.scss';

function TopContainer() {
  return (
    <div className="top">
      <div className="userImg" />
      <span className="infoText">you can mak anyyhing by code</span>
      <span className="infoName">- G.T.Brac -</span>

      <Link to="/login" className="startButton">
        브랜치 시작하기
      </Link>
    </div>
  );
}

export default TopContainer;
