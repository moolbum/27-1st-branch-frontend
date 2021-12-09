import { Link } from 'react-router-dom';
import './FooterBar.scss';

function WrapPageFooter({ footerBar }) {
  return (
    <div className="wrapPageFooter">
      <div className="wrapPageFooter">
        {footerBar.prev_posting && (
          <Link
            to={`/detailPage/${footerBar.prev_posting.id}`}
            className="prev"
          >
            <span className="prevPage">작가의 이전글</span>
            <strong className="prevTitle">
              {footerBar.prev_posting.title}
            </strong>
          </Link>
        )}
        {footerBar.next_posting && (
          <Link
            to={`/detailPage/${footerBar.next_posting.id}`}
            className="next"
          >
            <strong className="nextTitle">
              {footerBar.next_posting.title}
            </strong>
            <span className="nextPage">작가의 다음글</span>
          </Link>
        )}
      </div>
    </div>
  );
}

export default WrapPageFooter;
