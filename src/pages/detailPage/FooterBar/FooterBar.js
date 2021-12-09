// Footer.js

import { Link } from 'react-router-dom';
import './FooterBar.scss';

function WrapPageFooter({ footerBar, onChangePostContent }) {
  // console.log(footerBar);
  // console.log(footerBar.prev_posting.title);
  // console.log(footerBar.prev_posting.title);
  return (
    <div className="wrapPageFooter">
      <div className="wrapPageFooter">
        <Link to="" onClick={() => onChangePostContent(0)} className="prev">
          <span className="prevPage">작가의 이전글</span>
          <strong className="prevTitle">'이해'라는 당신의 오만</strong>
          {/* <strong className="prevTitle">{footerBar.prev_posting.title}</strong> */}
        </Link>
        <Link to="" onClick={() => onChangePostContent(1)} className="next">
          {/* <strong className="nextTitle">{footerBar.next_posting.title}</strong> */}
          <span className="nextPage">작가의 다음글</span>
        </Link>
      </div>
    </div>
  );
}

export default WrapPageFooter;
