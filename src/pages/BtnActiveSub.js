import './BtnActiveSub.scss';
import { useState } from 'react';

function BtnActiveSub({ changeBtn }) {
  const [sub, setSub] = useState('구독중');

  const unSubActive = () => {
    setSub('구독해지');
  };

  const subActive = () => {
    setSub('구독중');
  };
  return (
    <button
      className="BtnActiveSub"
      onMouseEnter={unSubActive}
      onMouseLeave={subActive}
      onClick={changeBtn}
    >
      {sub}
    </button>
  );
}

export default BtnActiveSub;
