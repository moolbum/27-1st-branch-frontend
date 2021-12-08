// Footer.js

import { Link } from 'react-router-dom';
import './FooterBar.scss';

function WrapPageFooter({ footerBar, onChangePostContent }) {
  return (
    <div className="wrapPageFooter">
      {footerBar.map(barData => {
        const { id, title, page, text } = barData;
        return (
          <div className="wrapPageFooter" key={id}>
            <Link to="" onClick={() => onChangePostContent(0)} className="prev">
              <span className="prevPage">작가의 이전글</span>
              <strong className="prevTitle">'이해'라는 당신의 오만</strong>
            </Link>
            <Link to="" onClick={() => onChangePostContent(1)} className="next">
              <strong className="nextTitle">어느 키위 이야기</strong>
              <span className="nextPage">작가의 다음글</span>
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export default WrapPageFooter;
