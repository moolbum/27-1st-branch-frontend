import { Link } from 'react-router-dom';
import './FooterBar.scss';

function WrapPageFooter({ footerBar }) {
  return (
    <div className="wrapPageFooter">
      {footerBar.map(barData => {
        const { id, title, page, text } = barData;
        return (
          <div className="wrapPageFooter" key={id}>
            <Link to="/detailPage" className="prev">
              <span className="prevPage">작가의 이전글</span>
              <strong className="prevTitle">'이해'라는 당신의 오만</strong>
            </Link>
            <Link to="/detailPage" className="next">
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
