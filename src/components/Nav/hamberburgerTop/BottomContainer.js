import './BottomContainer.scss';

function BottomContainer() {
  return (
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
  );
}

export default BottomContainer;
