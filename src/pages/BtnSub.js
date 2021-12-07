import './BtnSub.scss';

function BtnSub({ btnSubValue, changeBtn }) {
  return (
    <button className="BtnSub" onClick={changeBtn}>
      {btnSubValue ? '구독중' : '구독하기'}
    </button>
  );
}

export default BtnSub;
