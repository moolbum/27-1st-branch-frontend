import { Link } from 'react-router-dom';
import './BottomLoginContainer.scss';

function TopLoginContainer() {
  const logout = () => {
    localStorage.removeItem('TOKEN');
    window.location.reload();
  };
  return (
    <div className="buttom">
      <ul className="list">
        <Link to="/mypage">
          <li className="listIndex list1">내 브런치</li>
        </Link>
        <li className="listIndex">작가의 서랍</li>
      </ul>
      <div className="centerLine">
        <div className="line" />
        <span className="lineLogo">b</span>
        <div className="line" />
      </div>
      <ul className="list">
        <Link to="/">
          <li className="listIndex">브랜치 홈</li>
        </Link>
        <Link to="/listPage">
          <li className="listIndex">브랜치 나우</li>
        </Link>
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
        <div className="logout" onClick={logout}>
          로그아웃
        </div>
      </div>
    </div>
  );
}

export default TopLoginContainer;
